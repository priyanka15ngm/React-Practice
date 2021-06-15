import React, { Component } from "react";
var mystyle = {
    textAlign: "center",
    backgroundColor:"grey",
    borderRadius: 10,
    width:"50%",
    padding : 10,
    margin : 10,
    height:"10%",
}


class MyForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = { username: "" };

  }

  mySubmitHandler = (event) => {

    event.preventDefault();

    alert("You are submitting " + this.state.username);

  };

  myChangeHandler = (event) => {

    this.setState({ username: event.target.value });

  };

  render() {

    return (

      <form onSubmit={this.mySubmitHandler}  style={mystyle}>

        <h2>onSubmit Event Example</h2>

        <p>Enter your name, and submit:</p>

        <h1>{this.state.username}</h1>

        <input type="text" onChange={this.myChangeHandler} />

        <input type="submit" />

      </form>

    );

  }

}

export default MyForm;