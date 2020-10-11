import React from 'react'
import{Typography,Avatar,Grid,Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import capture from "../Capture.png"
import Typed from 'react-typed';
import  "./NavigationBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'



const editStyles=makeStyles(theme=>({
    avatar:{ width:theme.spacing(18),
    height:theme.spacing(17),
    margin:theme.spacing(1),
    [theme.breakpoints.between('300','600')]: {
        width: theme.spacing[15],
      },
    },
    title:{color:"white"},
    container:{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"100vw", textAlign:"center", zIndex:1}
}));

 const Header = () => {
     const classes=editStyles();
    return (	
        <>
        <Box className={classes.container}>
            <div className="avatar-picture">
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={capture} alt="Profile Picture"/>
            </Grid>
            </div>
            <div className="header-name"> 
            <Typography style={{color:"white",fontFamily: 'David Libre'}} variant="h4">
                <Typed strings={["<span>&lt;</span>"+"Adelina Cimpan/"+"<span>&gt;</span>"]}  typeSpeed={40}>
                </Typed>
            </Typography>
            <br/>
            <Typography className="subtitle" variant="h5">
                <Typed strings={[" Junior Front-End Developer", "Web Design","UX/UI developer" ]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
            </div>
            <Grid container justify="center">
            <FontAwesomeIcon  className="fa-4x js" icon={faJsSquare} />
            <FontAwesomeIcon className="fa-4x react" icon={faReact} />
            <FontAwesomeIcon className="fa-4x html" icon={faHtml5} />
            <FontAwesomeIcon className="fa-4x css" icon={faCss3Alt} />
            </Grid>
       </Box>

       </>
    );
};

export default Header;