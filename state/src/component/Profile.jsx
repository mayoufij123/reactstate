import React from "react";

export default class Person extends React.Component {
    constructor(person){
        super(person);
     this.state = { fullName:'mayoufi jaber' , bio:'full stack' , imgsrc: '' , proffesion:'developpeur'
       } 
}


  render() {
    return (
      <div>
        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.imgsrc}</h1>
        <h1>{this.state.proffesion}</h1>
        
      </div>
    )
  }
}
