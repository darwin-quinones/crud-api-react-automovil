import react from 'react';
import React, { useEffect, useState } from "react";
import {useNavigate, useParams, Link} from 'react-router-dom'

// components
import * as CarServer from "./CarServer.jsx";
import countries from "./countries.json"
import * as Alerts from "./Alerts.jsx";

const CarEdit = () => {

    const navigate = useNavigate();
    const params = useParams();

    const initialState = {id:0, nombre:"", marca:"", modelo:"", pais:"", }

    // ponerle un stado y establecer el objeto
    const [car, setCar] = useState(initialState)

    const handleInputChange = (e) => {
        // se le asigna el varlor a el objeto car 
        setCar({...car, [e.target.name]: e.target.value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // enviar datos para editar
        try{
            const resp = await CarServer.editCar(car)
            const data = await resp.json()
            
            if(data.success){
                e.target.reset()
                Alerts.saved()
            }
            navigate('/')
        }catch(error){
            Alerts.carError()
        }
    }

    const getCarById = async (idCar) => {
        try{
            const resp = await CarServer.getCarById(idCar)
            const car = await resp.json()
            
            const {id, nombre, marca, modelo, pais} = car
            // aqui hace que se ingresen los datos en los inputs
            setCar({id, nombre, marca, modelo, pais})
        }catch(error){
            Alerts.noData()
        }

       
    }


    // obtener el parametro id 
    useEffect(() => {

        if (params.id) {
            getCarById(params.id)
        }
        // eslint-disable-next-line
    }, [])

    return (
            
        <div className="card">
        

            <div className="card-header">
                <h1>Editar un Carro</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input type="text" name="nombre"  id="" 
                      className={"form-control"}
                      onChange={handleInputChange}
                      value={car.nombre}
                      placeholder="Nombre" 
                      required={true}
                      maxLength="100"
                      aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Modelo</label>
                      <input type="text" name="modelo" id=""  
                      className={"form-control"} 
                      onChange={handleInputChange}
                      value={car.modelo}
                      required={true}
                      maxLength="100"
                      placeholder="Modelo" aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el correo del carro</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Marca</label>
                      <input type="text" name="marca"  id="" 
                      className={"form-control"} 
                      onChange={handleInputChange}
                      value={car.marca}
                      placeholder="Marca" 
                      required={true}
                      maxLength="100"
                      aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
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
                      
                        
                     
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
                    </div>
                    <div className="btn mt-2" role="group" aria-label="">

                        <button type="submit" className="btn btn-success" style={{marginRight: "5px"}}>Editar Carro</button>
                        <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                   
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default CarEdit