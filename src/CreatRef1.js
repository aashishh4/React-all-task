import { Component,createRef } from "react";
class CreatRef1 extends Component
{
    constructor()
    {
        super()
        this.inf=createRef()
    }

    Change()
    {
        this.inf.current.style.color="red"
        this.inf.current.value=1234
    }
    render()
    {
        return(
            <div>
                <input type="text" ref={this.inf}/><br/>
                <button onClick={()=>this.Change()}>ok</button>
            </div>
        )
    }
}export default CreatRef1