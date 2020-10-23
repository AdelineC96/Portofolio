import React, {Component} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography,Box} from "@material-ui/core"
import NavigationBar from "./NavigationBar"
import {Link} from "react-router-dom"
import {Grid,Cell} from 'react-mdl'
import capture from "../Capture.png"
import AdelinaCimpanResume from"./AdelinaCimpanResume.pdf"
import "./Resume.css"
import Education from "./Education"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import Footer from "./Footer"
import "aos/dist/aos.css";




class AboutMe extends Component{

    
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 1000
        });
        AOS.refresh();

      }

    render(){
        return(
            <>
            <NavigationBar/>
            <div>
            <Grid className="container">
            <Cell className="first-cell" col={4}>
                    <div className="about-me">
                        <div className="aboutMe-section">
                        <img src={capture} alt="profile-picture"
                        className="profile-picture"/>
                        <h2 className="myName">Adelina Cimpan</h2>
                        <h4 className="secondTitle">Junior Front-End Developer</h4>
                        <div data-aos="fade-right">
                        <h2 className="text">About Me</h2>
                        <p className="para-text">Hi there! <span style={{color:"#2488c6"}}>Welcome to my website.</span> My name is Adelina and I'm a young aspiring front-end developer. I'm currently a rookie but I'm eager to learn more everyday. I've always been passionated by technology and I wanted to find out how things work. 
                        I like to code in my free time to learn more and develop my skills and I also enjoy working both as a team or invidually.
                        I'm a friendly, flexible person who gets accustomed really fast and my past experiences taught me how to work well against deadlines. 
                        If you want to get in touch you can find me below.
                        </p>
                        </div>
                        <hr className="horizontal-line"/>
                        <div data-aos="fade-left">
                        <h2 className="text">Hobbies</h2>
                        <p className="para-text">I'm a very outgoing person, so most of my hobbies are related to travelling, hiking, unexpected roadtrips,discovering new places,new people,learning about other people's culture and traditions. I believe travelling broadens the mind and this is what makes me feel fulfilled. I do also enjoy a good read and I'm always looking to try new things and to learn more.
                        </p>
                        </div>
                        <hr className="horizontal-line"/>
                        <div data-aos="fade-up">
                        <h5 className="text contact">Address</h5>
                        <p style={{color:"#2488c6" }}>Cluj Napoca, Romania</p>
                        <h5 className="text contact">Phone</h5>
                        <p style={{color:"#2488c6"}} >+40747387193</p>
                        <h5 className="text contact">Email</h5>
                        <Link to="/contact">
                        <p style={{color:"#2488c6" }}>adelinacimpan@gmail.com</p>
                        </Link>
                        </div>
                        <div data-aos="zoom-in">
                            <a target="_blank" href="https://www.facebook.com/AdelinaCimpan96/">
                        <FontAwesomeIcon  className="fa-4x fb" icon={faFacebook} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/adelina-cîmpan-ba5199198"> 
                        <FontAwesomeIcon className="fa-4x linkedIn" icon={faLinkedin} />
                        </a>
                        <a target="_blank" href="https://github.com/AdelineC96">
                        <FontAwesomeIcon  className="fa-4x gitHub" icon={faGithub} />
                        </a>
                        <a href={AdelinaCimpanResume} title="" target="_blank" download={AdelinaCimpanResume} >
                        <FontAwesomeIcon  className="fa-4x gitHub" icon={faFileDownload} />
                        </a>

                        </div>
                        </div>
                    </div>
                </Cell>
                </Grid>
            </div>
            <Footer/>

            </>
        )
    }
}

export default AboutMe;
