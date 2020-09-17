import axios from 'axios';

const OpenWeather = async (search) => {
    // DO NOT UPLOAD KEY
    const API_KEY = '78f727aa66cd91e4a1bede26a7d2e88a'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`

    try {
        const searchCity = await axios.get(url)
        return searchCity.data
    } catch (err) {
        console.log(err.messages)
    }
}

export default OpenWeather;