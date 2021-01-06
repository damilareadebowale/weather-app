// Init Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Init weather 
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('wt-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value; 
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);

    // Get and display weather
    getWeather(); 

    git// Close modal
    // document.getElementById('locationModal').classList.remove();
    
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results)
    })
    .catch(err => console.log(err));
}