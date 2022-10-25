// import React from "react";


// class CarList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return (  
//             <div className="card">
//             <div className="card-header">
//             <Link className="btn btn-success" to={"/crear"}>Agregar empleado</Link>
//             </div>
//             <div className="card-body">
//                 <h4>Lista de empleados</h4>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Nombre</th>
//                             <th>Correo</th>
//                             <th>Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* mapeo empleados */}
//                         {empleados.map(
//                             (empleado) => (
//                                 <tr key={empleado.id}>
//                                     <td >{empleado.id}</td>
//                                     <td>{empleado.nombre}</td>
//                                     <td>{empleado.correo}</td>
//                                     <td>
//                                         <Link type="button" className="btn btn-warning" 
//                                         to={`/editar/${empleado.id}`}
//                                         style={{marginRight: "5px"}}
//                                         >Editar</Link>
//                                         <button type="button" className="btn btn-danger"
//                                         onClick={()=>this.borrarRegistros(empleado.id)}>
//                                         Borrar</button>
//                                     </td>
//                                 </tr>
//                             )
//                         )}


//                     </tbody>
//                 </table>
//             </div>
//             <div className="card-footer text-muted">
                
//             </div>
//         </div>
//         );
//     }
// }
 
// export default CarList;