import React from 'react';
import '../css/Footer.css';
function Footer() {

    return (
        <div className='footer'>
            <div className='text_style'>
                <p className='text_style'>&copy; {new Date().getFullYear()} FoodieStudio</p>
            </div>
        </div>
    );
}

export default Footer;
