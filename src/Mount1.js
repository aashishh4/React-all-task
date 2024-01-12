import { Component } from "react";
class Mount1 extends Component
{
    constructor()
    {
        super()
        console.log("constructor is called")
    }
    render()
    {
        console.log("render is called")
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
    componentDidMount()
    {
      console.log("component did mount is called")
    }
}export default Mount1