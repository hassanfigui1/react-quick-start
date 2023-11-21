import React from 'react';


function Btn(){
  const displayAlert = () =>{
    return alert('Hello Dear Hassan ');
  }
  return <button onClick={displayAlert}>Display alert</button> 
}
export default Btn