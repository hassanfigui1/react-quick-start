import React from "react";
function Text(props){
    return(
        <div>
            <h1>Hello World ! </h1>
            <p>Please Click here</p>
            {props.children}
        </div>
    )
}
export default Text();