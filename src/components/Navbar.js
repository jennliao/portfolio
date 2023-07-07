import React, { useState } from 'react';
import Logo from '../assets/brownu-logo.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    // openLinks is name, setOpenLinks is function
    const [openLinks, setOpenLinks] = useState(false);

    // creating a function
    const toggleNavbar = () => {
        // changing the value to NOT what it is now
        setOpenLinks(!openLinks)
    };

    // div lefthSide: if (?) openLinks is true, id is "open", else (:) id is "close"

    return (
        <div className="navBar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link to="/"><img src={Logo} /></Link>
                
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/projects"> CS Projects </Link>
                    <Link to="/misc"> Other Projects </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>

            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/projects"> CS Projects </Link>
                <Link to="/misc"> Other Projects </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNavbar}> <ReorderIcon /> </button>
            </div>
        </div>
    );
}

export default Navbar