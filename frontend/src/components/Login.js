import React, { useState } from "react";
import { useHistory } from "react-router-dom"; //useHistory hook
const Login = (props) => {
  //two parameter mail,password.
  const [credential, setCredential] = useState({ email: "", password: "" });
  const history = useHistory();
  //function to handle button click.
  const handleSubmit = async (e) => {
    //Avoid reloading
    e.preventDefault();
    //API call
    //Hit api for login
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email.join(""),
        password: credential.password.join(""),
      }),
    });
    //get response msg
    const json = await response.json();
    console.log(json);
    //if msg is success than take to home page
    if (json.sucess) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Login Successful", "success");
      history.push("/");
    } else {
      // alert("invalid credential");
      props.showAlert("Enter correct credential", "danger");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: [e.target.value] });
  };
  return (
    <>
      <h3
        className="container my-4"
        style={{
          textAlign: "center",
          color: "white",
          textShadow: "2px 2px black",
        }}
      >
        Login for iNotebook to continue !!!
      </h3>
      <div
        className="container my-4"
        style={{
          color: "white",
          border: "3pt solid white",
          fontStyle: "italic",
          width: "50%",
          height: "50%",
          borderRadius: "5%",
          boxShadow: "25px 15px 5px black",
          textShadow: "2px 2px black",
        }}
      >
        {/* use onSubmit in form */}
        <form
          onSubmit={handleSubmit}
          style={{ margin: "10%", fontSize: "100%" }}
        >
          <div className="form-group">
            <label htmlFor="email">Email address :</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={credential.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
