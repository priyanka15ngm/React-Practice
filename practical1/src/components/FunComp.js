import "../css/Fun.css"



function FunComp(props){
    return(
        <div className="function" >
         <h1 >This is Functional Component </h1>
        {/* <div className="label" >created By: {props.name}</div> */}
        <p>
          <span className="label">
            <b>created By: </b>
          </span>
          <span className="author">
            <b> {props.name}</b>
          </span>
        </p>
        </div>

        
       
    )
}

export default FunComp;