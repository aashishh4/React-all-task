import { Component } from "react";
class Update1  extends Component
{
    constructor()
    {
        super()
        console.log("contructor is called")
    }
    shouldComponentUpdate()
    {
        console.log("shoud component is update")
        return true;
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
    componentDidUpdate()
    {
        console.log("component did update is called")
    }

}
export default Update1