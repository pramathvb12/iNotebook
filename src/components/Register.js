import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Register = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {name,email,password} = credential
    //API call
    //api call
    // Example POST method implementation:
    //hit api call for register
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name.join(),
        email: credential.email.join(),
        password: credential.password.join(),
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.sucess) {
      //save the auth token and redirect
      //set token to localstorage
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Signup Successful", "success");
      history.push("/login");
    } else {
      //   alert("user exist");
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
        Register for iNotebook to continue which is free
      </h3>
      <div
        className="container mt-4"
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
        <form
          onSubmit={handleSubmit}
          style={{ margin: "10%", fontSize: "100%" }}
        >
          <div className="form-group">
            <label htmlFor="name">User Name :</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              name="name"
              value={credential.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credential.password}
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confpassword">Confirm Password :</label>
            <input
              type="password"
              className="form-control"
              name="confpassword"
              id="confpassword"
              value={credential.confpassword}
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
