import { useState } from "react";
import styles from "./home.module.css";
import { Lang, Location } from "../../types/enum";
import { GetWeather } from "../../hooks";
import toast from "react-hot-toast";
import { WeatherCard } from "../../components";
import { BackroundImage } from "../../types";

const Home = () => {
  const [language, setLanguage] = useState<Lang>(Lang.uz);
  const [location, setLocation] = useState<Location>(Location.TASHKENT);

  const { data, error, isLoading } = GetWeather({
    lang: language,
    location: location,
  });

  if (error) {
    toast.error("Error getting data!");
    return null;
  }

  if (isLoading) return <p className="center">Loading...</p>;

  return (
    <div
      className={styles["home"]}
      style={{ backgroundImage: `url(${BackroundImage[location]})` }}
    >
      <nav className="container">
        <div>
          <img src="/weather.logo.png" alt="" />
          <span>Weather</span>
        </div>
        <h1>{location}</h1>
        <div>
          <select
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value as Location)}
          >
            {Object.values(Location).map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          <select
            name="lang"
            id="lang"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Lang)}
          >
            <option value={Lang.uz}>uz</option>
            <option value={Lang.eng}>eng</option>
            <option value={Lang.ru}>ru</option>
          </select>
        </div>
      </nav>
      <div className="container">
        <WeatherCard data={data.forecast.forecastday} />
      </div>
    </div>
  );
};

export default Home;
