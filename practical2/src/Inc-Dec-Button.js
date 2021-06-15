import React from "react";
var mystyle = {
    textAlign: "center",
    backgroundColor:"yellow",
    borderRadius: 10,
    width:"50%",
    padding : 10,
    margin : 10,
    height:"10%",
}


class Test extends React.Component{

    constructor(){
        super()
        this.state = { num:0,
            }
            console.log("Constructor");


    }

    incFun  = () => {
        this.setState({num:this.state.num+1})
    }
    decFun  = () => {
        this.setState({num:this.state.num-1})
    }

    reset = () => {
        this.setState({ num: 0 });
      };

    More = () =>{
          this.setState = ({name: "kapoor"})
      };


      componentWillMount() {
        console.log("componentWillMount Parent");
      }
      componentDidMount() {
        console.log("componentDidMount Parent");
      }
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate parent");
        return true;
      }
      componentWillUpdate() {
        console.log("componentWillUpdate() called");
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate() called");
      }
      componentWillUnmount() {
        console.log("componentWillUnmount() called");
      }
      

    render(){
        console.log("render inc dec button");
        return(
            <>
            <style>{'body { background-color: red; }'}</style>
                 <div style={mystyle}>
                
                <h1>{this.state.num}</h1>
            <button onClick = {this.incFun}>inc</button>
            <button onClick = {this.reset}>reset</button>
            <button onClick = {this.decFun}>dec</button>

            </div>


            
            
            
            
            
            </>
            
        )
    }








}
export default Test;