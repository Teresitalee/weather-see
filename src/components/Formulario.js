import React, { Component } from 'react';

class Formulario extends Component {

    //creacion de Refs

    ciudadRef = React.createRef();
    paisRef = React.createRef();


    buscarClima = (e) =>{
        e.preventDefault();

    // leer los refs y crear el objeto 

    const respuesta = {
        ciudad: this.ciudadRef.current.value,
        pais:this.paisRef.current.value
    }

    //console.log(respuesta);
    
    // enviar los props
   this.props.datosConsulta(respuesta);

    // resetear el form (opcional)


    }
    
    render() { 
        return (

            <div className="container text-uppercase mt-5">
              <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="input-group">
                        <div className="input-group-prepend fa-amazon"><span className="input-group-text">Ciudad</span>
                          </div>
                        <input className="form-control" type="text" />  
                    </div>
                </div>

                <div className="col-md-3">
                   <div className="input-group mb-3 edtFormMarg">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Pais</label>
                       
                         <select className="custom-select" id="inputGroupSelect01">
                           <option selected>Elije un Pais</option>
                             <option value="AR">Argentina</option>
                             <option value="GER">Alemania</option>
                             <option value="GER">Australia</option>
                             <option value="GER">Brazil</option>
                             <option value="CO">Colombia</option>
                             <option value="CH">China</option>
                             <option value="CH">Chile</option>
                             <option value="GER">Ecuador</option>
                             <option value="CH">Dinamarca</option>
                             <option value="CH">Estados Unidos</option>
                             <option value="CH">España</option>
                             <option value="CH">Francia</option>
                             <option value="CH">Islandia</option>
                             <option value="GER">India</option>
                             <option value="GER">Israel</option>
                             <option value="GER">Italia</option>
                             <option value="GER">Inglaterra</option>
                        </select>
                      </div>
                    </div>
                    </div>

                     
                <div className="col-md-6">
                   <button className="btn btn-success btn-md " type="submit">Buscar...</button>
                 </div>
               </div>
           </div>
      )
   }
}
 
export default Formulario;