import React , {useState} from 'react'
import {Link} from "react-router-dom"
import{AppBar, Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box, ListItemIcon} from "@material-ui/core";
import {Home,Apps,ContactMail,Menu, Tune} from "@material-ui/icons"
import  "./NavigationBar.css"
import capture from "../Capture.png"
import { makeStyles } from '@material-ui/core/styles';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MailIcon from '@material-ui/icons/Mail';
import MobileMenu from "@material-ui/core/Drawer"


const editStyles=makeStyles( theme=>({
    menuSliderContainer:{width:250,background:"black", height:"100%"},
    avatar:{display:"block", margin:"0.5rem auto", width:theme.spacing(13), height:theme.spacing(13)},
    listItem:{color:"#1976d2"},
    navBarTitle:{color:"white",textDecoration:"none"}
}))

const icons=[
    {
        listOfIcons: <Home/>,
        textList:"Home",
        listPath:"/"
    },

    {
        listOfIcons: <ContactMail/>,
        textList:"About Me",
        listPath:"/aboutme"
    },
    {
        listOfIcons: <InsertDriveFileIcon/>,
        textList:"Resume",
        listPath:"/resume"
    },
    {
        listOfIcons: <Apps/>,
        textList:"Projects",
        listPath:"/projects"

    },

    {
        listOfIcons: <MailIcon/>,
        textList:"Contact Me",
        listPath:"/contact"
    },
]


 const NavigationBar = () => {
     const [state,setState]=useState({
         right:false
     })

     const toggleMenu=(slider,open)=>()=>{setState({...state,[slider]:open})}



     const classes=editStyles()
     const sideList=slider=>(
     
     <Box className={classes.menuSliderContainer} component="div" onClick={toggleMenu(slider,false)}>
     <Avatar className={classes.avatar}src={capture} alt="Profile Picture"/>
     <Divider/>
     <List>
         {icons.map((lsItem,key)=>(
        
         <ListItem button key={key} component={Link} to={lsItem.listPath} >
             <ListItemIcon className={classes.listItem}>
             {lsItem.listOfIcons}
             </ListItemIcon>
             <ListItemText style={{color:"white"}} primary={lsItem.textList}/>
             </ListItem>
             ))}
     </List>
     </Box>)
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background:"black"}}>
                <Toolbar>
                <IconButton  onClick={toggleMenu("right",true)}>
                    <Menu className="menu-button"></Menu>
                    </IconButton>
                    <Link style ={{textDecoration:"none"}} to="/">
                    <Typography variant="h5" className={classes.navBarTitle}>
                    Portfolio
                    </Typography>
                    </Link>
                    <MobileMenu open={state.right} anchor="right" onClose={toggleMenu("right",false)}>
                        {sideList("right")}
                    </MobileMenu>
                </Toolbar>
            </AppBar>
        </Box>

        </>
    )
}

export default NavigationBar;
