import React from "react";

const About = () => {
  return (
    <div
      className="container my-3"
      style={{
        textAlign: "center",
        color: "white",
        border: "2pt solid white",
        borderRadius: "20%",
        boxShadow: "25px 15px 5px black",
        fontFamily:"cursive",
        fontSize:"20px",
        textShadow: "2px 2px black",
      }}
    >
      <h2 className="my-3">About us</h2>
      <br />
      <p >
        This is iNotebook basically a website where a user can store his
        important note in the cloud and he only can access to it.
        <br />
        <br />
        No one can see his note except him.Also we developed as basic
        application in the future it will be enhanced.
        <br />
        <br />
        For more info contact us.
      </p>
      <br />
      <br />
     <div className="container" style={{marginLeft:"25%"}}>
      <p> <b>-- pramath v b</b> </p>
      <p>Developer of iNotebook.</p>
      </div> 
    </div>
  );
};

export default About;
