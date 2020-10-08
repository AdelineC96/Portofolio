import React from 'react'
import Header from './Header'
import NavigationBar from './NavigationBar'
import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/styles"
import 'font-awesome/css/font-awesome.min.css';


const editStyles=makeStyles({
    particlesCanva:{
    position:"absolute"}
})

 const Home = () => {
     const classes=editStyles()
    return (
        <>
            <NavigationBar/>
            <Header/>
            <Particles  canvasClassName={classes.particlesCanva}
             params={{particles:{number:{value:45, density:{enable:true,value_area:900}}, 
             shape:{type:"circle",
             stroke:{width:1,color:"white"}},
             size:{value:8,random:true,anim:{enable:true,speed:10,size_min:0.1,sync:true}},
            
              }
             }
            }
             />


        </>
    )
}

export default Home;