
import './App.css';
import Person from './component/Profile';
import React from 'react';
export default class Profile extends React.Component {
   constructor(){
      super();
      this.state={
        show:true 
        }
    }
    componentDidUpdate(){
  console.log( 'il ya un up date' )
  console.log(this.state.show)
}
show=()=>{
      this.setState({show :!this.state.show})
  
    console.log(this.state.show)}
    render() {
    return (
      <div>
       <button onClick={()=>this.show()} className="show">show</button>
       
       {this.state.show && <Person/>}
      
  </div>
)
  }
}
