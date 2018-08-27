import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import acciones from "../api/acciones"

class Participantes extends React.Component{

	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(key){
		//let valor = this.props.selectedPart + 1;
		let arrayKey = this.props.selectedPart;
		if(arrayKey.indexOf(key) >= 0)
			arrayKey.splice(arrayKey.indexOf(key),1)
		else
			arrayKey.push(key)
		console.log(arrayKey.indexOf(key),'arraykey');
		this.props.updateSelected(arrayKey)
	}



    render(){
    	let {participantes,total} = this.props;
    	if(total > 0){
	        return(
	            <section className="participantes">
	                <h2>Mostrando {total} participantes </h2>
	                {participantes.map((item)=>
	                	<article key={item.id} onClick={() => this.handleSubmit(item.id)} className={this.props.selectedPart.indexOf(item.id) >= 0 ? 'selected ' : '' }>
	                		<img src="http://placeimg.com/140/100/people"/>
	                		<div>
		                		<h3>{item.name}</h3>
		                		<p>{item.email} {item.address.street} {item.address.suite} {item.address.city}</p>
		                	</div>
	                	</article>)}
	            </section>
	        )
	    }
	    else{
	    	return(<section className="participantes">No hay participantes</section>)
	    }
    }
}



let mapStoreToProps = store => {
	console.log(store)
	return {
		selectedPart : store.Participantes.selectedPart
	}
}

let mapDispatchToProps = dipatch => {
	return {
		updateSelected : bindActionCreators(acciones.updateSelected,dipatch)
	}
}


export default connect(mapStoreToProps,mapDispatchToProps)(Participantes)