import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import "./Education.css"


class Education extends Component{
    render(){
        return(
           <Grid className="container">
            <Cell className="yearColumn" coll={4}>
                <p>{this.props.startYear}-{this.props.endYear}</p>
            </Cell>
            <Cell className="schoolColumn" coll={8}>
                <h4 style={{marginTop:'0px',margin:"5px"}}>{this.props.schoolName}</h4>
                <h6 style={{margin:"5px"}}>{this.props.schoolType}</h6>
                <p>{this.props.schoolDescription}</p>
            </Cell>
           </Grid>
        )
    }
}

export default Education;