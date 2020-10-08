import React,{Component} from 'react'
import {Grid,Cell } from 'react-mdl'
import "./Education.css"
import { LinearProgress } from "@material-ui/core";

class Skills extends Component {
   render(){
       return(
           <Grid>  
               <Cell className="barContainer" col={12}>
                   <div>
                       {this.props.skill}
                       <LinearProgress className="progressBar" variant="determinate" value={this.props.progress} />
                   </div>
               </Cell>
           </Grid>


       )
   }
}
export default Skills;