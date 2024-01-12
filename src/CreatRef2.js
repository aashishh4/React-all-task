import { Component,createRef } from "react";
class CreatRef2 extends Component
{
   constructor()
   {
    super()
    this.inf=createRef()
   }
   change()
   {
    this.inf.current.style.backgroundColor="red";
    this.inf.current.style.color="blue";
    this.inf.current.value="123"

   }
   render()
   {
    return(
        <div>
            <input type="text" ref={this.inf}></input><br></br>
            <button onClick={()=>this.change()}>ok</button>
        </div>
    )
   }
}export default CreatRef2