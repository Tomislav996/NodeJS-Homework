
let baseUrl = 'https://restcountries.com/v3.1/alpha'

let code = "MKD"



async function getCountriesData(countryCode) {
    let response = await fetch (`${baseUrl}/${countryCode}`)
    let countryData = await response.json();
    console.log(countryData[0].name);
    let borderingCodes = countryData[0].borders;
    console.log(borderingCodes);
    for(let borderCode of borderingCodes){
        let responseCodes = await fetch (`${baseUrl}/${borderCode}`)
        let parsedCodes = await responseCodes.json();
        console.log(parsedCodes[0].name); 
        
    }
}


getCountriesData(code)





