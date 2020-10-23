import React, {Component} from 'react'
import NavigationBar from "./NavigationBar"
import {Grid,Cell} from 'react-mdl'
import "./Resume.css"
import Education from "./Education"
import Skills from "./Skills"
import AOS from 'aos';
import Footer from "./Footer"
import highschool from "../highschool.png"
import UMF from "../UMF.jpg"
import InformalIT from "../InformalIT.png"


class Resume extends Component{
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
    render(){
        return(
            <>
            <NavigationBar/>
            <div>
            <Grid className="container"> 
               
                <Cell className="resume-col" col={8}>
                    <div  data-aos="zoom-in-left" className="education-section">
                    <h1 className="main-title">Education</h1>
                    <Education startYear={2011}
                    endYear={2015}
                    schoolLogo={highschool}
                    schoolName="A.T Laurian National College"
                    schoolType="English bilingual profile"
                    schoolDescription=" I've attended 4 years at A.T Laurian National College . I've Acquired:"
                    items={['Cambridge English Level 2 Certificate in ESOL International(Advanced)',' ECDL Core Certificate']}
                   
                    />
                    <hr className="horizontal-line"/>
                     <Education startYear={2015}
                    endYear={2018}
                    schoolLogo={UMF}
                    schoolName="University of Medicine and Pharmacy, Iuliu-Hatieganu Cluj Napoca"
                    schoolType="Technical Dentistry"
                    schoolDescription=" I've attended 3 years at the University of Medicine and Pharmacy, Iuliu-Hatieganu Cluj Napoca . I've earned a bachelor degree in technical dentistry. During university and I've acquired:"
                    items={['how to deal with deadlines and finish tasks on time',
                        'work together as a team , because each dental appliance involved different stages which were distributed to different memebrs of the team and we had to synchronize in order to achieve the final result',
                        'I have also participated in volunteering at the prophylaxis departments and the social department ']}
                    />
                    <hr className="horizontal-line"/>
                     <Education startYear={2020}
                    endYear={2020}
                    schoolLogo={InformalIT}
                    schoolName="The Informal School of IT"
                    schoolType="Front-End Development Javascript "
                    schoolDescription="I have attended a 5 month course at the Informal School of IT. During the 5 months I've learned Web development concepts such as:"
                    items={['HTML5','CSS3 (how to build a responsive website)',' Javascript(ECMAScript6) -OOP concepts,variables,primitive types, AJAX, API, functions,hoisting,DOM.',' I have also acquired knowledge in GitHub(basic principles and commands)',' React library(the final team project was done in React and has the following functionalities- add/edit/remove movie using CRUD operations/Advanced Search-search movie by genre,title,year,etc./ login-register function/pagination).']}
                    
                    />
                    </div>
                    <hr className="horizontal-line"/>
                    <div data-aos="zoom-in-left">
                    <h1 className="main-title">Skills</h1>
                    <Skills skill="Javascript" 
                    progress={80}/>
                    <Skills skill="HTML" 
                    progress={100}/>
                    <Skills skill="CSS" 
                    progress={70}/>
                    <Skills skill="React" 
                    progress={50}/>
                    </div>
                    <hr className="horizontal-line"/>
                    <div data-aos="zoom-in-left">
                    <h1 className="main-title">Languages</h1>
                    <Skills skill="Romanian" 
                    progress={100}/>
                    <Skills skill="English" 
                    progress={100}/>
                    <Skills skill="Italian" 
                    progress={50}/>
                    </div>
                </Cell>

            </Grid>
            </div>
            <Footer/>


            </>
        )
    }
}

export default Resume;
