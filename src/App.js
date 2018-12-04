import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';



class App extends Component {

   // guardamos el mensaje de error en el state
    state = {
        error :'',
        consulta : {},
        response : {}
    }

    componentDidUpdate() {
        this.consultaApi();
    }

    componentDidMount() {
        this.setState({
           error: false 
        })
    }

    // consulta a la API VIA fetch
    consultaApi = () => {
        const {ciudad, pais} = this.state.consulta;
        if(!ciudad || !pais) return null;
    
        const appId  = '50a2d943758d5191cb4d6a49ffc3501a';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        //console.log(url);

    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(datos => {

        this.setState({
            response : datos
        })
    })
    .catch(error => {
        console.log(error)
    })
}
    

    datosConsulta = respuesta => {
       if(respuesta.ciudad === '' || respuesta.pais === '') {
           this.setState({
               error:true
           })

       } else {
           this.setState({
               consulta: respuesta,
               error : false

           })
          
       }
        
    }

    render() {

        const error = this.state.error;

        let resultado;

        if(error) {
            resultado = <Error mensaje="Ambos campos son Obligatorios" />

        }else {
            resultado = <Clima resultado = {this.state.resultado} />//aca se llama al resultado de la consulta
        }
    

        return (
            <div className="app">
            <Header
              title ='....who is weather?'
             />
            <Formulario
              datosConsulta = {this.datosConsulta}        
            />
            {resultado}
          </div>  
        );
    }
}

export default App;


