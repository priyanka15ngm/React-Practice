
import React from 'react';
const Funcss ={
    backgroundColor:"pink",
    fontSize:40,
    
    
    padding: 16,
    borderRadius: 10,
    height: 250,
    textAlign:"center",
    margin:10,
}
class MyClassComp extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div style={Funcss}>
          <h1 >This is Class Component </h1>
          {/* <div className="label">created By: {this.props.name}</div> */}
          <p>
          <span className="label">
            <b>created By: </b>
          </span>
          <span className="author">
            <b> {this.props.name}</b>
          </span>
        </p>
        </div>
      );
    }
  }
  export default MyClassComp;