import logo from './logo.svg';
import CheckWeather from './components/CheckWeather';
import Card from './components/Card';

function App() {
  
  const APP_ID = "1d746361df4112d4a44339cc2fabd41b";
  const input = "";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APP_ID}`;

  

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col text-center">
          <CheckWeather /> 
          <Card icon={logo} name="Sydney" description="Warm" temp={23} feelslike={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
