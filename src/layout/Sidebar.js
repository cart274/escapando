import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import acciones from "../api/acciones"

class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    handleApprove(approve){
        if(approve){
            console.log(this.props.selectedPart,'Approved')
        }
        else{
            console.log(this.props.selectedPart,'Not Approved')
        }
    }

    render(){
        return(
            <aside className="sidebar">
                <h2>Selección: {this.props.selectedPart.length} participantes</h2>
                <input type="button" className="btn-aprobar" value="Aprobar" onClick={() => this.handleApprove(true)}/>
                <input type="button" className="btn-rechazar" value="Rechazar" onClick={() => this.handleApprove(false)}/>
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