import React from 'react';
import './Hello.css'

function Hello ({firstName}) {
  return <div> <p className="myname">My name is Maria : {firstName} </p>
  <p className="myname">My age is not defined </p>
  
  <p className="myname">I am PIAIC student </p>
  
  </div>
}

export default Hello;
