

import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import * as CarServer from "./CarServer.jsx";
import * as Alerts from "./Alerts.jsx";


import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);



const CarList = () => {

    const navigate = useNavigate()



    // useState para manejar el estado del comonente(hook)

    const [cars, setCars] = useState([])


    const listarCars = async () => {
        try{
            const resp = await CarServer.CarList()
            const data = await resp.json()
        
            setCars(data)
           
           
        }catch(error){
            // Alerts.carError()
            console.error(error)
        }
        
    }
    

    const deleteCar = async (idCar) => {
        try{
            MySwal.fire({
                title: '¿Estás seguro de eliminar?',
                text: "¡No podrá recuperar está información!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, Eliminarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                    detected(idCar)
                    // se pasa a eliminar
                }
              })
            const detected  = async (idCar) =>{
                const resp = await CarServer.deleteCar(idCar)
                const data = await resp.json()
                if(data.success){
                    MySwal.fire(
                        '¡Eliminado!',
                        'Ha sido eliminado.',
                        'success'
                      )
                    listarCars()
                }
                navigate('/')
            }

           
        }catch(e){
            Alerts.carError()
        }
        
        


    }


    useEffect(() => {
        listarCars()
        // eslint-disable-next-line
    },[])

    // //consultar datos cada 5 segundos
    // setTimeout(() => {
    //     listarCars()
    // }, 5000)

    var c = 1
    return (

        <div className="card table table-responsive">
            <div className="card-header table table-responsive" style={{backgroundColor:"#33527F", float:'right'}}>
                <button className="btn btn-success ms-auto" onClick={() =>navigate('/crear')}>
                    Agregar Carro</button>
            </div>
            <div className="card-body table table-responsive">
                <h4>Lista de Carros</h4>
                <table className="table table-responsive table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>                          
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
                        {(!cars.error) ? cars.map((car) => (
                            <tr key={car.id}>
                                <td>{c++}</td>                   
                                <td>{car.nombre}</td>
                                <td>{car.modelo}</td>
                                <td>{car.marca}</td>
                                <td>{car.pais}</td>
                                <td>{car.fechaCreate}</td>
                                {car.fechaUpdate ? (
                                    <td>{car.fechaUpdate}</td>
                                ):(
                                    <td>No se ha editado</td>
                                )
                                }
                               

                                <td>
                                    <button type="button" className="btn btn-warning"
                                    onClick={() => navigate(`/editar/${car.id}`)}

                                        style={{ marginRight: "5px" }}
                                    >Editar</button>
                                    <button onClick={() =>deleteCar(car.id)}type="button" className="btn btn-danger">
                                        Borrar</button>
                                </td>
                            </tr>
                        )) : (
                            <tr key={cars}><td colSpan="10">No hay datos</td></tr>
                            
                            )}




                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted">

            </div>
            
        </div>
    );

}
export default CarList;
