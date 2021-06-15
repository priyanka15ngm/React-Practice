import React, { Component } from "react";
var mystyle = {
    textAlign: "center",
    backgroundColor:"yellow",
    borderRadius: 10,
    width:"50%",
    padding : 10,
    margin : 10,
    height:"10%",
}

class DemoOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialName: "",
    };
  }
  changeText(event) {
    this.setState({
      tutorialName: event.target.value,
    });
  }
  render() {
    return (
      <div style={mystyle}>
        <h2>onChange Event Example</h2>
        <label htmlFor="name">Enter Tutorial name: </label>
        <input
          type="text"
          id="companyName"
          onChange={this.changeText.bind(this)}
        />
        <h4>You entered: {this.state.tutorialName}</h4>
      </div>
    );
  }
}
export default DemoOnChange;