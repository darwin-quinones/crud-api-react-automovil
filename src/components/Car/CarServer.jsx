const API_URL_AUTOMOVILES = 'http://localhost/crud_automovil/'
const API_URL_COUNTRIES =  'https://mocki.io/v1/29227111-789f-4c19-aa86-71481b70e230'


export const CarList = async () =>{
    var cars = await fetch(API_URL_AUTOMOVILES)
    return cars
}

export const getCarById = async (idCar) =>{
    var car = await fetch(API_URL_AUTOMOVILES+"?consultar="+idCar)
    return car
}


export const CountryList = async () =>{

    fetch(API_URL_COUNTRIES, {
        
        method: "GET",
       
        })
        .then(function (response) {
            if (!response.ok) {
               return response.text().then(result => Promise.reject(new Error(result)));
            }
        
            console.log(response.json()) 
        })
    
    // var cars = await fetch(API_URL_COUNTRIES)
    // return cars

    // const response = await fetch(API_URL_COUNTRIES, {
    //     'mode': 'no-cors',
    //     'headers': {
    //         'Access-Control-Allow-Origin': '*',
    //     }
    // });
    // console.log(response)
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


// export default  CarList

























