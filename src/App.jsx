import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const { data, loading, error } = useWeather(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>🌤 Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />

        <button>Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Temp: {data.main.temp} °C</p>
          <p>Weather: {data.weather[0].main}</p>
        </div>
      )}

    </div>
  );
}

export default App;
