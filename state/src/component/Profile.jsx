
import React from "react";
export default class Person extends React.Component {
    constructor(person){
        super(person);
     this.state = { fullName:'mayoufi jaber' , bio:'full stack' , imgsrc: '' , proffesion:'developer',
          timer:0,
        intervall:null 
} 
} 
componentDidMount(){
  console.log( 'componentDidMount' );
  this.setState({
    intervall : setInterval(
      ()=>this.setState({     timer:this.state.timer+1}),
      1000
       )
  })
}
componentWillUnmount(){
  console.log('you kiled me');
  clearInterval(this.state.intervall)
}
  render() {
    return (
      <div className="prof" >
         <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.imgsrc}</h1>
        <h1>{this.state.proffesion}</h1>
        <hr />
        <p >{this.state.timer}</p>
        </div>
    )
  }
}
