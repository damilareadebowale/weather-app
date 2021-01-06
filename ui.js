class UI {
    constructor(){
        this.location = document.getElementById('wt-location');
        this.temp = document.getElementById('wt-temp');
        this.humidity = document.getElementById('wt-humidity');
        this.desc = document.getElementById('wt-desc');
        this.feels_like = document.getElementById('wt-feels-like');
        this.wind = document.getElementById('wt-wind');
    }
    paint(responseData){
        this.location.textContent = `${responseData.name}, ${responseData.sys.country}`;
        this.desc.textContent = responseData.weather[0].description;
        this.temp.textContent = `Temp(k): ${responseData.main.temp}`; 
        this.humidity.textContent = `Relative Humidity: ${responseData.main.humidity}`;
        this.feels_like.textContent = `Feels like: ${responseData.main.feels_like}`;
        this.wind.textContent = `Wind: ${responseData.wind.deg}`


    }
}