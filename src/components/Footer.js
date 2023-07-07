import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to="https://www.instagram.com/_jenniferliao_/"><InstagramIcon /></Link>
                <Link to="https://www.linkedin.com/in/jennifer-liao-487921218/"><LinkedInIcon /></Link>
                <Link to="mailto:jenliao60@gmail.com"><MailOutlineIcon /></Link>
            </div>
        </div>
    )
}

export default Footer