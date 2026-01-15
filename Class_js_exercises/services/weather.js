export const getWeather = async(city)=>{
    const apiKey="7a79dd3d5f62d67d5b7748d255209a2a"
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`

    const response= await fetch(url);
    const data =response.json();

    return data

}