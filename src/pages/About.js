import React from 'react';
import '../styles/About.css';
import Banner from '../assets/about-banner.jpg'
import Portrait from "../assets/dc-portrait.jpg";

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Banner})` }}>
                
            </div>
            <div className="aboutBottom">
                <h1>ABOUT ME</h1>

                <div className="content">
                    <div className="portraitImage">
                        <img src={Portrait} />
                    </div>
                    <div className="text">
                        <p class="introText">
                        Hi! My name is Jennifer Liao and I am a rising sophomore at Brown University. I grew up in Farmington, CT, a small suburban town near Hartford. I attended Farmington High School and graduated in 2022. 
                        </p>
                        <p class="csText">
                        I am currently working towards an Sc.B in Computer Science and an A.B. in History. I am currently employed as a member of the Brown University Library Digital Technologies team and have been working there part time since March. Our team is in charge of the entire Brown University Library website, including additional sites for various exhibits or digital projects. In this role, I have mainly been creating and maintaining sites in WordPress and PHP. In addition to this, I do a lot of work with Google Analytics (we recently migrated from UA to GA4) and with collecting data on our sites, whether that's site indexing, tracking Analytics data, or monitoring plugins. Outside of my work, I am interested in developing games, websites, and inserting creativity and design into my projects.
                        </p>
                        <p class="csText">
                        I have also recently been hired as a Humor Teaching Assistant for a Brown University class on Object Oriented Programming in Java. In this role, I will be responsible for all standard TA duties such as holding debugging/conceptual hours and running labs. On top of this, as Humor TA, I will be responsible for writing, running, and performing various skits and activities intended to increase student engagement and involvement in CS. More specifically, I will be writing a 25 minute long skit and performing it with the other TAs for the first class. Additionally, I will be performing small skits during each lecture with the other Humor TAs. This role is extremely important in shaping the inviting yet rigorous culture of this course and makes it stand out amongst other introductory CS courses.
                        </p>
                        <p class="persText">
                        In my free time, I am interested in art and photography. I especially enjoy digital photography, charcoal, acrylic, and pen drawings. I also have been getting back into reading! My favorite book is "A Gentleman in Moscow" by Amor Towles, but I like any book that is heartwarming or will make me cry. In addition to this, I really enjoy music. I play piano and guitar and I have a huge soft spot for rock music (particularly indie rock/pop!). Finally, I enjoy going to the gym, going for walks, and visiting national parks (Acadia is my favorite, I have to stay loyal to the East Coast)! Feel free to check out some of my creative work <a href="/misc" className="otherProjects">here</a>.
                        </p>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}

export default About