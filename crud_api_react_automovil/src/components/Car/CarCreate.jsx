
import {Link , useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// components
import * as CarServer from "./CarServer.jsx";
import countries from "./countries.json"

const CarCreate = () =>{
    const navigate = useNavigate()
    

    const initialState = {id:0, nombre:"", marca:"", modelo:"", pais:"", }

    // ponerle un stado y establecer el objeto
    const [car, setCar] = useState(initialState)

    const handleInputChange = (e) =>{
        // console.log(e.target.name);
        // console.log(e.target.value);

        // se le asigna el varlor a el objeto car 
        setCar({...car, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(car)

        let resp ;
        try{
            resp = await CarServer.createCar(car)
            const data = await resp.json()
            
            if (data.success){
                e.target.reset()
                navigate('/')
            }

        }catch(e){
            console.log(e)
        }
    }

    const getCountries =  () =>{
        // const API_URL_COUNTRIES =  'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByCode/JSON/debug'
        // const r = fetch(API_URL_COUNTRIES,  {
        //     method: 'GET',
        //     // mode: 'no-cors',
        //     // headers: {
              
        //     // },
        // })
        // .then((res)=>{
            
        //     return res.json();      
        // })
        // .then((data)=>{
        //     console.log(data);          
        // })
        // console.log(r)       
    }

    // useeffect se ejecuta cuando el componente ha cargado
    useEffect( ()  => {
        getCountries()
     });
    

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
                      placeholder="" 
                      aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Modelo</label>
                      <input type="text" name="modelo" id=""  
                      className={"form-control"} 
                      onChange={handleInputChange}
                      placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el correo del carro</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Marca</label>
                      <input type="text" name="marca"  id="" 
                      className={"form-control"} 
                      onChange={handleInputChange}
                      placeholder="" 
                      aria-describedby="helpId"/>
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">País</label>
                      <select  name="pais" onChange={handleInputChange} className="form-select" aria-label="Default select example">
                      <option value=''>Selecciona un país</option>                      
                      {countries.map((c) => (
                           <option  key={c.sName}  value={c.sName}>{c.sName}</option>
                      ))
                      }
                    </select>
                      
                        
                     
                      <small id="helpId" className="invalid-feedback">Escribe aqui el nombre del carro</small>
                    </div>
                    <div className="btn mt-2" role="group" aria-label="">

                        <button type="submit" className="btn btn-success" style={{marginRight: "5px"}}>Agregar carro</button>
                        <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                   
                    </div>
                </form>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div>
    )
}

export default CarCreate