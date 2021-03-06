import React, {Component} from'react';
import NavigationBar from "./NavigationBar"
import MediaCard from "./ProjectCard"
import "./Portofolio.css"
import AOS from 'aos';
import Footer from "./Footer"


class Portfolio extends Component{

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
            <div className="cards-container">
                <MediaCard/>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Portfolio;