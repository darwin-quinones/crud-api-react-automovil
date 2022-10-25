const API_URL = 'http://localhost/crud_automovil/'


export const CarList = async () =>{
    var cars = await fetch(API_URL)
    return cars
}


// export default  CarList

























