import { useState, useEffect } from "react";

const API_KEY = "api key cn end baina shvv";

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        );

        if (!res.ok) {
          throw new Error("City not found");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
};
