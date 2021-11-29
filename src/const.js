export var country_api = ()=>{
    
    return "https://countriesnow.space/api/v0.1/countries/cities";

}


export var weather_api = (city)=>{
    return "http://api.weatherstack.com/current?access_key=acffc5d7a94d047b36dc6526a6ad270f&query="+city;
}