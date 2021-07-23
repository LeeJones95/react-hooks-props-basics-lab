import React from "react";
import user from "../data/user";
import Links from "./Links";



let bio = true

function About(props) {
console.log(bio)
if (props.user.bio == null) {
    bio = false 
}

  return (
    <div id="about">
      <h2>About Me</h2>
     
 <p>{props.user.bio}</p>
     } else {
       <p>Hi!</p>
     }
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user} /> 
    </div>
  );
}

export default About;
