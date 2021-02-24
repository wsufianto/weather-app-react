// Main App to fetch the API, render the form & output
import { useState, useEffect } from 'react';
import errorLogo from './error_icon.png'
import CheckWeather from './components/CheckWeather';
import Card from './components/Card';

function App() {

  const [search, setSearch] = useState('');
  const [weatherData, setWeather] = useState({
    icon: '',
    name: '',
    description: '',
    temp: '',
  });

  useEffect(() => {
    const getWeatherData = async () => {
      const APP_ID = "1d746361df4112d4a44339cc2fabd41b";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APP_ID}&units=metric`;

      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(response.statusText);

        const data = await response.json();

        setWeather({
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          name: data.name,
          description: data.weather[0].description,
          temp: Math.trunc(data.main.temp) + " °C feels like " + Math.trunc(data.main.feels_like) + " °C"
        })
      } catch (Error) {
        setWeather({
          icon: errorLogo,
          name: search,
          description: "Location Not Found",
          temp: "",
        })
        console.log(Error);
      }
    }
    if (search !== '') {
      getWeatherData();
    }
  }, [search]);

  const toFind = ({ text }) => {
    setSearch(text);
  }

  return (
    <div className="container pt-5 mt-5">
      <div className="row align-content-center justify-content-center">
        <div className="col col-md-8 text-center">
          <CheckWeather toFind={toFind} />
          {search !== "" && <Card icon={weatherData.icon} name={weatherData.name} description={weatherData.description} temp={weatherData.temp} />}
        </div>
      </div>
    </div>
  );
}

export default App;