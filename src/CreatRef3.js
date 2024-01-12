import { Component,createRef } from "react";
class CreatRef3 extends Component
{
    constructor()
    {
        super()
        this.inf=createRef()
    }
    change()
    {
        this.inf.current.style.color="blue"
    }

    render()
    {
        return(
            <div>
                <input type="text" ref={this.inf}/><br/>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default CreatRef3