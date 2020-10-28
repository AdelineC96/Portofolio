import React, {Component} from 'react'
import NavigationBar from "./NavigationBar"
import {Grid,Cell} from 'react-mdl'
import "./Resume.css"
import Education from "./Education"
import Skills from "./Skills"
import AOS from 'aos';
import Footer from "./Footer"
import sykes from "../sykes.png"



class Experience extends Component{
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
                    <div data-aos="zoom-in-right">
                    <h1 className="main-title">Professional Experience</h1>
                    <Education startYear={2018}
                    endYear={2019}
                    schoolLogo={sykes}
                    schoolName="Sykes Enterprises Eastern Europe"
                    schoolType="Customer Service Representative"
                    schoolDescription="Sykes is a company who provides business process outsourcing BPO services, IT consulting, and IT enabled services, such as technical support and customer service. During the time I was a customer support representative agent I had to:"
                    items={[ 'Listen to customer requests, referring to alphabetical or geographical directories to answer questions and provide telephone information. ' ,'Promote company products, services, and savings plans when appropriate.','Resolve complaints or answer questions regarding policies and procedures.','Assist customers who were facing technical issues with their products via chat, email and phone.','This role helped me develop my soft skills,technical skills and deal with KPIs that the client was demanding.']}
                    />
                    
                    <hr className="horizontal-line"/>
                      <Education startYear={2019}
                    endYear={"Present"}
                    schoolLogo={sykes}
                    schoolName="Sykes Enterprises Eastern Europe"
                    schoolType="Quality Assurance Analyst"
                    schoolDescription="I've been promoted to the position of Quality Assurance Analyst in June
                    2019.
                    The role implied that I was:"
                    items={[ 'Responsible of a team of CSR agents which I had to coach in order to achieve the goals settled in the feedback sessions with an action plan.', 
                      'Supervise the work of customer support employees to ensure adherence to quality standards, deadlines, and proper procedures, correcting errors or problems.This was done by monitoring their calls/chats/emails on a weekly basis.',
                      'Provide employees with guidance in handling difficult or complex problems or in resolving escalated complaints or disputes',
                      'Discuss job performance problems with employees to identify causes and issues and to work on resolving problems',
                      'Evaluate employees job performance and conformance to regulations and recommend appropriate personnel action',
                      'This role helped me learn how to work as a team and what is the impact of an individual towards the team',
                      'I have also acquired how to face deadlines and achieve what the client requires'

                      ]}
                    />
                
                    </div>
                </Cell>

            </Grid>
            </div>
            <Footer/>


            </>
        )
    }
}

export default Experience;
