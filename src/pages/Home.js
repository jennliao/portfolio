import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner_copy.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Jennifer Liao </h1>
                <p> CS & History at Brown </p>
                <Link to="/about">
                    <button> About me </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;