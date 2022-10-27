// const API_URL_AUTOMOVILES = 'https://crud-automvil-php.000webhostapp.com/index.php'
const API_URL_AUTOMOVILES = 'http://localhost/crud_automovil/'

export const CarList = async () =>{
    var cars = await fetch(API_URL_AUTOMOVILES, {
        // method: 'GET',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
        // }
    })
    return cars
}

export const getCarById = async (idCar) =>{
    var car = await fetch(API_URL_AUTOMOVILES+"?consultar="+idCar)
    return car
}


export const createCar = async (car) =>{
    return await fetch(API_URL_AUTOMOVILES+"?insertar=1", {
        method: 'POST',
        body: JSON.stringify({

            "nombre": String(car.nombre).trim(),
            "marca": String(car.marca).trim(),
            "modelo": String(car.modelo).trim(),
            "pais": String(car.pais).trim(),
        })
    })
}


export const editCar = async (car) =>{
    return await fetch(API_URL_AUTOMOVILES+"?actualizar=1", {
        method: 'POST',
        body: JSON.stringify({
            
            "id": parseInt(car.id),
            "nombre": String(car.nombre).trim(),
            "marca": String(car.marca).trim(),
            "modelo": String(car.modelo).trim(),
            "pais": String(car.pais).trim(),
        })
    })
}

export const deleteCar = async (idCar) =>{
    return await fetch(API_URL_AUTOMOVILES+"?borrar="+idCar, {
        method: 'POST',
    })
}

























