import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import "./Education.css"
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AOS from 'aos';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'


class Education extends Component{

    constructor(props){
        super(props)
        this.state = {
            visibility: false
          };
   
    }
    toggleVisibility=()=>{
        this.setState({
        visibility: !this.state.visibility
        })
        }

   
        componentDidMount() {
            // or simply just AOS.init();
            AOS.init({
              // initialise with other settings
              duration : 2000
            });
          }
   
    render(){
        return(
           <Grid className="container">
            <Cell className="yearColumn" coll={4}>
            <Timeline align="left" >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent  className="timelineYear">{this.props.startYear}-{this.props.endYear}</TimelineContent>
      </TimelineItem>
     
    </Timeline>
            </Cell>
            <Cell className="schoolColumn" coll={8}>
              <div className="school-container">
                <img className="schoolLogo" src={this.props.schoolLogo}></img>
                <h4 onClick={this.toggleVisibility} className="schoolName" style={{marginTop:'0px',margin:"5px"}}>
                  {this.props.schoolName}
                  {this.state.visibility?<FontAwesomeIcon  className="fa-1x dropdown" icon={faChevronUp} /> :<FontAwesomeIcon  className="fa-1x dropdown" icon={faChevronDown} />}
                </h4>
                <h6 className="schoolType">{this.props.schoolType}</h6>
                {this.state.visibility?<div data-aos='zoom-in'><p className="para-school">{this.props.schoolDescription}</p>
                <ul>
                        {this.props.items.map((item,index)=>{return <li>{item}</li>})}
        
                    </ul></div>:""}
                    </div>
            </Cell>
           </Grid>
        )
    }
}

export default Education;

