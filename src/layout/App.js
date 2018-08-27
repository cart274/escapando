import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {BrowserRouter , Switch , Route} from "react-router-dom"
import Home from "../paginas/Home"


class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            titulo : "Escapando",
            contador : 0
        }
    }

    sumar(){
        this.setState({
            contador : this.state.contador + 1
        })
    }

    render(){
        let {titulo,links} = this.state
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Header titulo={titulo} />
                    <Main>
                        <Route  path="/" component={Home}/>
                    </Main>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}



export default App

