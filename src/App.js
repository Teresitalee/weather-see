import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


class App extends Component {
    render() {
        return (
            <div className="app">
            <Header
              title ='....who is weather?'
             />
            <Formulario />         
            </div>
        );
    }
}

export default App;


