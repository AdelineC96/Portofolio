import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import NavigationBar from "./NavigationBar"
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./ContactMe.css"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./Footer"


export default function ContactUs() {


  const [count,setCount] = useState(0);

  function sendEmail(e) {
      
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_1n0s3of', e.target, 'user_ILyvGKrq2INplcy6puF07')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    setCount(count+1);
}

  return (
      <>
      <NavigationBar/>
  <div className="contact-container">
      
    <Typography style={{color:"blue"}}>
    <FontAwesomeIcon className="fa-2x faPaperPlane" icon={faPaperPlane} />
        Contact Me...
    </Typography>
      <form className="contact-form" onSubmit={sendEmail}>
    <TextField
          className="inputs"
          label="Name"
          margin="dense"
          name="name"
          required="true"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
          label="Email"
          className="inputs"
          name="email"
          margin="dense"
          required="true"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Message"
          name="message"
          className="inputs"
          required="true"
          margin="dense"
          multiline
          rows={4}
          placeholder="Type a Message"
          variant="outlined"
        />
         <Button size="small" color="primary" type="submit" value="Send"variant="contained" color="primary" >
        Submit
        </Button>
        </form>
          {count?"Your message has been sent.":""}
        </div>
        <Footer/>
    </>
  );
}