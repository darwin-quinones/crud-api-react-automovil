import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

import * as CarServer from "./CarServer.jsx";



const CarList = () => {

    const navigate = useNavigate()



    // useState para manejar el estado del comonente(hook)

    const [cars, setCars] = useState([])


    const listarCars = async () => {
        const resp = await CarServer.CarList()
        const data = await resp.json()
        setCars(data)
    }


    useEffect(() => {
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
                <button className="btn btn-success" onClick={() =>navigate('/crear')}>Agregar Carro</button>
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
                        {/* ingresar datos */}
                        {cars ? cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.nombre}</td>
                                <td>{car.modelo}</td>
                                <td>{car.marca}</td>
                                <td>{car.pais}</td>
                                <td>{car.fechaCreate}</td>
                                <td>{car.fechaUpdate}</td>

                                <td>
                                    <button type="button" className="btn btn-warning"
                                    // onClick={() => navigate()}

                                        style={{ marginRight: "5px" }}
                                    >Editar</button>
                                    <button type="button" className="btn btn-danger">
                                        Borrar</button>
                                </td>
                            </tr>
                        )) : (

                            null)}




                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted">

            </div>
        </div>
    );

}
export default CarList;