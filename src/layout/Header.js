import React from "react"
import {NavLink} from "react-router-dom"

export default class Header extends React.Component{
    render(){
        let {titulo,links} = this.props
        return(
            <header>
                <h1>{titulo}</h1>
            </header>
        )
    }
}