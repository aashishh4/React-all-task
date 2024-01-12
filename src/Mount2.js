import { Component } from "react";
class Mount2 extends Component
{
    constructor()
    {
        console.log("constructor  is called")
        super()
        this.state=({data:100})
    }
    change()
    {
        this.setState({data:500})
    }
    render()
    {
        console.log("render is called")
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.change()}>okk</button>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("component did mount is called")
    }

}export default Mount2