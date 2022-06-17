import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';

class Visitantes extends React.Component {
    /**
     * Constructor de la clase Visitantes
     * @param {} props 
     */
    constructor(props) {
        super(props)
        this.state = {
            visitantes: [],
            isFetch: true,
        }
    }
    /**
     * ComponentDidMount que carga la información de los visitantes
     */
    componentDidMount() {
        fetch("http://localhost:8082/visitantes")
            .then(response => response.json())
            .then(visitantesJson => this.setState( {
                visitantes: visitantesJson.data,
                isFetch: false
            }))
    }
    /**
     * Render que muestra la información de los visitantes 
     * @returns : Renderizado de los visitantes
     */
    render () {
        
        const { visitantes, isFetch } = this.state

        if (isFetch) {
            return 'Cargando...'
        }
        return (
          <div className ="container">
            <DataTable value={visitantes}>
                <Column field="nombre" header="nombre"></Column>
                <Column field="posicionx" header="destinox"></Column>
                <Column field="posiciony" header="destinoy"></Column>
                <Column field="destinox" header="destinox"></Column>
                <Column field="destinoy" header="destinoy"></Column>
            </DataTable>
          </div>
        );
    }
    
}
export default Visitantes;