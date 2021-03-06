import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moviewebsite from "../moviewebsite.PNG"
import personalwebsite from "../personalwebsite.PNG"
import ReactLogo from "../ReactLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./Portofolio.css"
import AOS from 'aos';



const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 200,
  },

});

export default function MediaCard() {
  const classes = useStyles();

 const useEffect=(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
      <>
      <div data-aos="flip-left">
      <a style={{textDecoration:"none"}} target="_blank" href="https://hungry-wiles-820e03.netlify.app/">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          image={moviewebsite}
          title="Movie Website"
          className={classes.media}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Venus Movies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                The website can also be found on GitHub and is the final group project which has been made with React by myself and my two other teammates at Informal School of IT.
                    
                </Typography>
        </CardContent>
      </CardActionArea>
        <a target="_blank" href="https://github.com/AdelineC96">
        <FontAwesomeIcon  className="fa-2x gitHub" icon={faGithub} />
        </a>
    </Card>
    </a>
    </div>
    <div  data-aos="flip-left">
    <a style={{textDecoration:"none"}} target="_blank" href="https:/adelinacimpan.netlify.app/">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={personalwebsite}
          title="Personal Website"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Personal Portofolio
          </Typography>          
          <Typography variant="body2" color="textSecondary" component="p">
          The website  was made with React library and it involves a page with my current work, a page about my professional experience, my education and a contact me page, where we can get in touch.
          </Typography>
        </CardContent>
      </CardActionArea>
      <a target="_blank" href="https://github.com/AdelineC96/Portofolio">
        <FontAwesomeIcon  className="fa-2x gitHub" icon={faGithub} />
        </a>
    </Card>
    </a>
    </div>
    <div  data-aos="flip-left">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ReactLogo}
          title="Incoming Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          New Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur sint occaecat cupidatat non proident.
          </Typography>
        </CardContent>
      </CardActionArea>
      <a target="_blank" href="https://github.com/AdelineC96">
        <FontAwesomeIcon  className="fa-2x gitHub" icon={faGithub} />
        </a>
    </Card>
    </div>
    
    </>
  );
}
