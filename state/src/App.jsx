
import './App.css';
import Person from './component/Profile';
import React from 'react';
export default class Profile extends React.Component {
   
    constructor(){
      super();
      this.state={
        show:true ,
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

componentDidUpdate(){
  console.log( 'il ya un up date' )
  console.log(this.state.show)
}
componentWillUnmount(){
  console.log('you kiled me');
  clearInterval(this.state.intervall)
}


    show=()=>{
      this.setState({show :!this.state.show})
    
    console.log(this.state.show)}
    
  

  render() {
    return (
      <div>

{this.state.show && <Person/>}
      <button onClick={()=>this.show()}>show</button>
      <hr />
      <p>{this.state.timer}</p>
        
      </div>
    )
  }
}
