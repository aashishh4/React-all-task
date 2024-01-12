import { Component } from "react";
class Mount extends Component
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
                <h1>Hello ram</h1>
            </div>
        )
    }
}export default Mount