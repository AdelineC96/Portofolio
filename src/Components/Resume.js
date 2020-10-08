import React, {Component} from 'react'
import NavigationBar from "./NavigationBar"
import {Grid,Cell} from 'react-mdl'
import "./Resume.css"
import Education from "./Education"
import Skills from "./Skills"





class Resume extends Component{
    render(){
        return(
            <>
            <NavigationBar/>
            <div>
            <Grid className="container"> 
               
                <Cell className="resume-col" col={8}>
                    <div className="education-section">
                    <h1 className="main-title">Education</h1>
                    <Education startYear={2011}
                    endYear={2015}
                    schoolName="A.T Laurian National College"
                    schoolType="English bilingual profile"
                    schoolDescription="Acquired Cambridge English Level 2 Certificate in ESOL International(Advanced)
                    Acquired ECDL Core Certificare"
                    />
                    <hr style={{borderTop:"3px", width:"80%"}}/>
                     <Education startYear={2015}
                    endYear={2018}
                    schoolName="University of Medicine and Pharmacy, Iuliu-Hatieganu Cluj Napoca"
                    schoolType="Technical Dentistry"
                    />
                    <hr style={{borderTop:"3px", width:"80%"}}/>
                     <Education startYear={2020}
                    endYear={2020}
                    schoolName="The Informal School of IT"
                    schoolType="Front-End Development Javascript "
                    schoolDescription="I have attended a 5 month course at the Informal School of IT and I've learned Web Development concepts such as HTML5, CSS3, Javascript(ECMAScript6) and React. I've acquired knowledge in how to build a responsive website, JS concepts such as AJAX, how to work with an API, OOP, and how to build a functional website.
                    We had weekly homeworks which were meants to improve our knowledge and practice, also a final team project which was a Movie Website.
                    "
                    />
                    </div>
                    <div>
                    <h1 className="main-title">Professional Experience</h1>
                    <Education startYear={2018}
                    endYear={2019}
                    schoolName="Sykes Enterprises Eastern Europe"
                    schoolType="Customer Service Representative"
                    schoolDescription="I've assisted the customers who were contacting us via chat,email and phone with the issues they were facing with their products. I've developed my soft skills,technical skills and experience in working with KPI's that the client was demanding. "
                    />
                    <hr style={{borderTop:"3px", width:"80%"}}/>
                      <Education startYear={2019}
                    endYear={"Present"}
                    schoolName="Sykes Enterprises Eastern Europe"
                    schoolType="Quality Assurance Analyst"
                    schoolDescription="I've been promoted to the position of Quality Assurance Analyst. In the following role I was responsible of a team of CSR agents which I had to coach in order to achieve the goals settled in the feedback sessions with an action plan. The role implied that I monitored their calls,chats and emails and determine together with the agents what and how can be improved. This role helped me learn how to work as a team and what is the impact of one's results towards the team. I have also acquired how to face deadlines and achieve the client's requirements. "
                    />

                    </div>
                    <hr style={{borderTop:"3px", width:"80%"}}/>
                    <h1 className="main-title">Skills</h1>
                    <Skills skill="Javascript" 
                    progress={80}/>
                    <Skills skill="HTML" 
                    progress={100}/>
                    <Skills skill="CSS" 
                    progress={70}/>
                    <Skills skill="React" 
                    progress={50}/>
                    <hr style={{borderTop:"3px", width:"80%"}}/>
                    <h1 className="main-title">Languages</h1>
                    <Skills skill="Romanian" 
                    progress={100}/>
                    <Skills skill="English" 
                    progress={100}/>
                    <Skills skill="Italian" 
                    progress={50}/>
                </Cell>

            </Grid>
            </div>


            </>
        )
    }
}

export default Resume;
