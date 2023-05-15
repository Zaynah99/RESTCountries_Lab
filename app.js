async function setUp(){
    fetchCountries();
    const apiData =  await fetchCountries();
}


const fetchCountries = async () => {
    const countryResponse = await fetch ("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    return countryJsonData;

}

setUp();

function createNewCountryElement(country){
   const countryList = document.querySelector("#countriesList")
   const newListItem = document.createElement("li")
   newListItem.innerText = `${country.name.common}` //interpolation
   countryList.appendChild(newListItem);
}



