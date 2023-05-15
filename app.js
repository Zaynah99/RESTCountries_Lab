function setUp(){
    fetchCountries();
}
const fetchCountries = async () => {
    const countryResponse = await fetch ("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    console.log(countryJsonData);

}

setUp();

