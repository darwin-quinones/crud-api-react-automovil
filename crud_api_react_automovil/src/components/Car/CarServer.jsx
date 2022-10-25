const API_URL_AUTOMOVILES = 'http://localhost/crud_automovil/'
const API_URL_COUNTRIES =  'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByCode/JSON/debug'


export const CarList = async () =>{
    var cars = await fetch(API_URL_AUTOMOVILES)
    return cars
}


export const CountryList = async () =>{

    fetch(API_URL_COUNTRIES, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" ,
            "Access-Control-Allow-Headers": "access, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            "Access-Control-Allow-Methods": "GET,POST"

        }, 
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


// export default  CarList

























