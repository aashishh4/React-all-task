import { Component } from "react"; 
class Update2 extends Component
{
    constructor()
    {
        console.log("Constructor is called")
        super()
        this.state=({data:0})
    }
  change()
  {
    this.setState({data:this.state.data+1})
  }

    shouldComponentUpdate()
    {
        console.log("should component update is called")
        return true;
    }
    render()
    {
        console.log("render is called")
        return(
            <div>
                <h1>my value is:{this.state.data}</h1>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
    componentDidUpdate()
    {
        console.log("component did update is called");
    }

}
export default Update2
