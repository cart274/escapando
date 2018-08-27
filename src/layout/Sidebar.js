import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import acciones from "../api/acciones"

class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <aside className="sidebar">
                <h2>Selección: {this.props.selectedPart.length} participantes</h2>
                <input type="button" className="btn-aprobar" value="Aprobar"/>
                <input type="button" className="btn-rechazar" value="Rechazar"/>
            </aside>
        )
    }
}

let mapStoreToProps = store => {
    return {
        selectedPart : store.Participantes.selectedPart
    }
}


export default connect(mapStoreToProps)(Sidebar)