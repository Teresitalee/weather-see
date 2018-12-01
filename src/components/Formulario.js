import React, { Component } from 'react';

class Formulario extends Component {

    //creacion de Refs

    buscarClima = (e) =>{
        e.preventDefault();

    // leer los refs y crear el objeto    


    }
    
    render() { 
        return (
            <div className="container col-xl-12 ml-5 ">
             <div className="card bg-danger w-75 mt-5 pt-3 ">
              <div className="card-body">
                <div className="flex-row ">
                  <form className="form-group ml-5 pl-5">
                    <label className="text-white mr-2 fa fa-globe"> Ciudad :</label>
                      <input className="input-group-lg" />
                      <label className="text-white mr-2 ml-4 fa fa-flag"> País :</label>
                      <select class="form-control-xl mr-4" id="exampleFormControlSelect1">
                        <option>Argentina</option>
                        <option>Alemania</option>
                        <option>China</option>
                        <option>Chile</option>
                        <option>Brazil</option>
                   </select>
                   <button type="submit" class="btn btn-dark btn-xl">Buscar....</button>
                  </form>    
                </div>     
                </div>
             </div>
            </div> 




         )
    }
}
 
export default Formulario;