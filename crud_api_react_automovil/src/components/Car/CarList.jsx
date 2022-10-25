import React, {useEffect, useState} from "react";

import * as CarServer from "./CarServer.jsx";



const CarList = () => {


    const listarCars = async () => {
        const resp = await CarServer.CarList()
        const data = await resp.json()
        
    }
    
    
    useEffect(() =>{
        listarCars()
        // eslint-disable-next-line
    }, [])

    // consultar datos cada 5 segundos
    setTimeout(() => {
        listarCars()
    }, 5000)
    
    
    return (
    
        <div className="card">
            <div className="card-header">
                <button className="btn btn-success">Agregar Carro</button>
            </div>
            <div className="card-body">
                <h4>Lista de empleados</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Pais</th>
                            <th>Fecha Creación</th>
                            <th>Fecha Edición</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Darwin</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            <td>
                                <button type="button" className="btn btn-warning"
    
                                    style={{ marginRight: "5px" }}
                                >Editar</button>
                                <button type="button" className="btn btn-danger">
                                    Borrar</button>
                            </td>
                        </tr>
    
    
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted">
    
            </div>
        </div>
    );

}
export default CarList;