import React from "react";
var yourstyle = {
    textAlign: "center",
    backgroundColor:"pink",
    borderRadius: 10,
    width:"50%",
    padding : 10,
    margin : 10
}



class ReadMore extends React.Component {
  constructor() {
    super();
    var a =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.";
    this.state = { name: "ReadMore", content: "", text: a };
  }
  update = () => {
    if (this.state.name === "ReadMore") {
      this.setState({
        name: "ReadLess",
        content: this.state.text,
      });
    } else {
      this.setState({
        name: "ReadMore",
        content: "",
      });
    }
  };

  render() {
    return (
      <div style={yourstyle}>
        <div className="classbased">
          <h1>Welcome to BetaLabs..!!</h1>
          <h3>Click on Button to see More|Less</h3>
          <p>{this.state.content}</p>
          <button className="" onClick={this.update}>{this.state.name}</button>
        </div>
      </div>
    );
  }
}
export default ReadMore;