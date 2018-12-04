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
                        <div className="input-group-prepen "><span className="input-group-text bg-primary border-primary text-white">Ciudad</span>
                          </div>
                        <input className="form-control" type="text" />  
                    </div>
                </div>

                <div className="col-md-3">
                   <div className="input-group mb-3 edtFormMarg">
                      <div className="input-group-prepend">
                        <label className="input-group-text bg-primary border-primary text-white" htmlFor="inputGroupSelect01">País</label>
                         <select className="custom-select" id="inputGroupSelect01">
                           <option defaultValue>Elije un País</option>
                             <option value="AR">Argentina</option>
                             <option value="GER">Alemania</option>
                             <option value="AU">Australia</option>
                             <option value="BR">Brazil</option>
                             <option value="CO">Colombia</option>
                             <option value="CH">China</option>
                             <option value="Cl">Chile</option>
                             <option value="GER">Ecuador</option>
                             <option value="CH">Dinamarca</option>
                             <option value="EU">Estados Unidos</option>
                             <option value="ES">España</option>
                             <option value="FR">Francia</option>
                             <option value="IS">Islandia</option>
                             <option value="IN">India</option>
                             <option value="IR">Israel</option>
                             <option value="IT">Italia</option>
                             <option value="EN">Inglaterra</option>
                        </select>
                    </div>
                  </div>
                </div>

                     
                <div className="col-md-3">
                   <button className="btn btn-primary btn-md border-primary " type="submit">Buscar...</button>
                 </div>
               </div>
           </div>
      )
   }
}
 
export default Formulario;