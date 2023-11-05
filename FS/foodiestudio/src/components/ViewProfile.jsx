import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import "../css/ViewProfile.css";
function ViewProfile() {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        city: '',
        state: '',
        country: '',
    });

    const { id } = useParams(); // Use id to match the route parameter

    useEffect(() => {
        // Use a GET request to retrieve user profile data based on the route parameter
        axios.get(`http://localhost:5000/viewProfile/${id}`)
            .then(res => {
                console.log(res);
                const profile = res.data[0];
                setUser({
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    phone_number: profile.mobile_number,
                    city: profile.city,
                    state: profile.state,
                    country: profile.country,
                });
            })
            .catch(err => {
                console.log('Error aaya hai:', err);
            });
    }, [id]); // Use id as a dependency to trigger the request when the parameter changes

    return (
        <div id="profile-container">
            <h1>View Profile</h1>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Phone Number: {user.phone_number}</p><br/>            
            <p>---Address---</p><br/>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Country: {user.country}</p>
        </div>
    );
}

export default ViewProfile;
