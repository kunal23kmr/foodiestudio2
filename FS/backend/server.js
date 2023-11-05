const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


var currentUser = -1;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "foodiestudio"
});

//checking the conection
// Add a database ping operation
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database is connected');
});

const port = 5000;

app.listen(port, () => {
    console.log("Server is listening on port", port);
});

app.post('/signup', (req, res) => {
    const mobileNumber = req.body.mobile_number;

    // Check if the mobile number already exists in the database
    db.query('SELECT * FROM users WHERE mobile_number = ?', [mobileNumber], (err, results) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }

        // If results.length is greater than 0, the mobile number already exists
        if (results.length > 0) {
            return res.status(400).json({ message: 'Mobile number already exists' });
        }

        // If the mobile number is not found, proceed to insert the new user
        const sql = "INSERT INTO users (`first_name`, `last_name`, `mobile_number`, `city`, `state`, `country`, `pincode`, `password`) VALUES(?)";
        const values = [
            req.body.first_name,
            req.body.last_name,
            mobileNumber, // Use the variable here
            req.body.city,
            req.body.state,
            req.body.country,
            req.body.pincode,
            req.body.password
        ];

        db.query(sql, [values], (err, data) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(data);
        });
    }
    );
});


app.post('/login', (req, res) => {
    const mobileNumber = req.body.mobile_number;
    const password = req.body.password;

    console.log(mobileNumber);
    console.log(password);
    db.query('SELECT * FROM users WHERE mobile_number = ? and password = ?', [mobileNumber, password], (err, results) => {
        // Query execution and callback
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }
        if (results.length > 0) {
            console.log('mil gya');
            // console.log(results[0].user_id);
            currentUser = results[0].user_id;
            return res.status(200).json(results);
            // return res.status(200);
        }
        console.log("baigan");
        return res.status(400).json({ message: 'Wrong phone number or, password.' });

    });
});

//to geting the current user from server.
app.get('/getuser', (req, res) => {
    res.status(200).json(currentUser);
});

app.post('/logout', (req, res) => {
    currentUser = -1; // You can set currentUser to null to indicate a user is not logged in.
    res.status(200).send('Logged out successfully');
});


app.post('/singleBlog', (req, res) => {
    //inserting id into table
    console.log('request is :', req.body.item_id);
    const id = +req.body.item_id;
    if (currentUser !== -1) {
        var query = 'insert into cart value(?,?)';
        db.query(query, [id, +currentUser], (err, result) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(result);
        })
    } else {
        return res.status(500).json({ message: 'Error' });
    }
})

//get cart list
app.get(`/getcartList`, (req, res) => {
    if (currentUser !== -1) {
        var query = 'select id from cart where user_id = ?';//SELECT user_id FROM foodiestudio.cart;
        db.query(query, [currentUser], (err, result) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            return res.status(200).json(result);
        })
    } else {
        return res.status(200).json({ message: 'not loged in' });
    }
})

app.get('/viewProfile/:id', (req, res) => {
    // console.log('hi')
    const id = +req.params.id; // Access the user_id from URL parameters

    console.log(id);

    db.query('SELECT user_id, first_name, last_name, mobile_number, city, state, country, pincode FROM users WHERE user_id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Error' });
        }
        if (results.length > 0) {
            console.log('Found user profile');
            return res.status(200).json(results);
        }
        console.log("User not found");
        return res.status(404).json({ message: 'User not found.' });
    });
});


app.post('/checkOut', (req, res) => {
    if (currentUser !== -1) {
        const querySelect = 'SELECT id FROM cart WHERE user_id = ?';
        db.query(querySelect, [currentUser], (err, result) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Error' });
            }
            if (result.length > 0) {
                console.log('ok1');
                const ids = result.map(item => item.id);
                const queryInsert = 'INSERT INTO order_list (user_id, id) VALUES (?, ?)';
                const insertPromises = ids.map(one_id => {
                    return new Promise((resolve, reject) => {
                        db.query(queryInsert, [currentUser, one_id], (err2, res2) => {
                            if (err2) {
                                console.log('error in adding ', err2);
                                reject(err2);
                            } else {
                                console.log('done ids: ', one_id);
                                resolve(res2);
                            }
                        });
                    });
                });

                Promise.all(insertPromises)
                    .then(() => {
                        const queryDelete = 'DELETE FROM cart WHERE user_id = ?';
                        console.log('ok2');
                        db.query(queryDelete, [currentUser], (err3, res3) => {
                            if (err3) {
                                console.log('error in deleting ', err3);
                                return res3.status(500).json({ message: 'Error' });
                            } else {
                                console.log('successfully deleted from cart and added to order_list');
                                console.log('ok3');
                                return res.status(200).json({ message: 'Your Order Successfully placed..!' });
                            }
                        });
                    })
                    .catch(error => {
                        console.log('Error in one of the insert queries:', error);
                        return res.status(500).json({ message: 'Error' });
                    });
            } else {
                console.log('No rows to process.');
                return res.status(200).json({ message: 'No items in the cart.' });
            }
        });
    } else {
        return res.status(400).json({ message: 'Not logged in' });
    }
});
