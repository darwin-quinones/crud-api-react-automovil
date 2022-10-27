
import {Link , useNavigate} from 'react-router-dom'
import React, { useState } from 'react';

// components
import * as CarServer from "./CarServer.jsx";
import * as Alerts from "./Alerts.jsx";
import countries from "./countries.json"

const CarCreate = () =>{
    const navigate = useNavigate()
    

    const initialState = {id:0, nombre:"", marca:"", modelo:"", pais:"", }

    // ponerle un stado y establecer el objeto
    const [car, setCar] = useState(initialState)

    const handleInputChange = (e) =>{

        // se le asigna el varlor a el objeto car 
        setCar({...car, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        let resp ;
        try{
            resp = await CarServer.createCar(car)
            const data = await resp.json()
            
            if (data.success){
                e.target.reset()
                Alerts.saved()
                
            }
            navigate('/')

        }catch(e){
            Alerts.createError()
        }
    }

    return (
            
        <div className="card">
        

            <div className="card-header">
                <h1>Agregar un nuevo carro</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input type="text" name="nombre"  id="" 
                      className={"form-control"}
                      onChange={handleInputChange}
                      placeholder="Nombre" 
                      required={true}
                      maxLength="100"
                    />
                     
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Modelo</label>
                      <input type="text" name="modelo" id=""  
                      className={"form-control"} 
                      onChange={handleInputChange}
                      required={true}
                      placeholder="Modelo" 
                      maxLength="100"
                     />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Marca</label>
                      <input type="text" name="marca"  id="" 
                      className={"form-control"} 
                      onChange={handleInputChange}
                      placeholder="Marca" 
                      required={true}
                      maxLength="100"
                     />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">País</label>
                      <select  name="pais" required={true} onChange={handleInputChange} className="form-select" aria-label="Default select example">
                      <option value=''>Selecciona un país</option>                      
                      {countries.map((c) => (
                           <option  key={c.sName}  value={c.sName}>{c.sName}</option>
                      ))
                      }
                    </select>
                     
                    </div>
                    <div className="btn mt-2" role="group" aria-label="">

                        <button type="submit" className="btn btn-success" style={{marginRight: "5px"}}>Agregar carro</button>
                        <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                   
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default CarCreate