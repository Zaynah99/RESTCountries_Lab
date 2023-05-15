let apiData;
const countryList = document.querySelector("#countriesList")

async function setUp(){
    fetchCountries();
    countryList.innerHTML = "";
    apiData =  await fetchCountries();
    apiData.map(country => {
        createNewCountryElement(country);
    })
}

const fetchCountries = async () => {
    const countryResponse = await fetch ("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    return countryJsonData;

}

setUp();

function createNewCountryElement(country){
   const newListItem = document.createElement("li")
   newListItem.innerText = `${country.name.common} population: ${country.population}` //interpolation using $`
   countryList.appendChild(newListItem);
  
}

const submitButton = document.querySelector('#submit');



