import React, { useState } from "react";
import "./TextInput.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [{
    username: "user1",
    password: "pass1"
  }, {
    username: "user2",
    password: "pass2"
  }];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = event => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find(user => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = name => name === errorMessages.name && React.createElement(
    "div",
    { className: "error" },
    errorMessages.message
  );

  // JSX code for login form
  const renderForm = React.createElement(
    "div",
    { className: "form" },
    React.createElement(
      "form",
      { onSubmit: handleSubmit },
      React.createElement(
        "div",
        { className: "input-container" },
        React.createElement(
          "label",
          null,
          "Username "
        ),
        React.createElement("input", { type: "text", name: "uname", required: true }),
        renderErrorMessage("uname")
      ),
      React.createElement(
        "div",
        { className: "input-container" },
        React.createElement(
          "label",
          null,
          "Password "
        ),
        React.createElement("input", { type: "password", name: "pass", required: true }),
        renderErrorMessage("pass")
      ),
      React.createElement(
        "div",
        { className: "button-container" },
        React.createElement("input", { type: "submit" })
      )
    )
  );

  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "div",
      { className: "login-form" },
      React.createElement(
        "div",
        { className: "title" },
        "Sign In"
      ),
      isSubmitted ? React.createElement(
        "div",
        null,
        "User is successfully logged in"
      ) : renderForm
    )
  );
}

export default Login;