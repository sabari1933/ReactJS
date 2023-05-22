import React from "react";
import './ModuleOne.css';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';



function Portfolio() {
    return (
        <>
            <header className="header">
                <a href="#" className="logo">Portfolio</a>
                <nav className="navbar">
                    <a href="#" className="active">Home</a>
                    <a href="#">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <section className="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Sabari</h1>
                    <h3>And I'm a <span>FullStack Developer</span></h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fuga deleniti, quo, molestiae repellendus
                        voluptate sequi eaque, doloribus dicta quis impedit dolores quia nulla natus. Voluptate maiores
                        distinctio rerum tenetur.</p>
                    <div className="social-media">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><LinkedIn /></a>
                        <a href="#"><GitHub /></a>
                    </div>
                    <a href="#" className="pbtn">Download CV</a>
                </div>
                <div className="home-img">
                    <img src="https://blog.depositphotos.com/wp-content/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg.webp" alt="" />
                </div>
            </section>
        </>
    );
}
export default Portfolio;