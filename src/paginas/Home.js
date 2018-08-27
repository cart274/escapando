import React from "react"
import Sidebar from "../layout/Sidebar"
import Participantes from "../layout/Participantes"

export default class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			selectedP:0
		}
	}
	componentDidMount(){
		this.getParticipantes();
	}

	getParticipantes(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => {this.setState({isLoading:false,participantes:json})})
	}


	render(){
		if(!this.state.isLoading){
			return(
				<section className="home">
					<Participantes participantes={this.state.participantes}  total={this.state.participantes.length}/>
					<Sidebar/>
				</section>
			)
		}
		else{
			return(<section className="home">Loading...</section>)
		}
	}
}

