import { useState } from "react";
import styles from "./home.module.css";
import { Lang, Location } from "../../types/enum";
import { GetWeather } from "../../hooks";
import toast from "react-hot-toast";
import { WeatherCard } from "../../components";
import { BackroundImage } from "../../types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  return (
    <div
      className={styles["home"]}
      style={{ backgroundImage: `url(${BackroundImage[location]})` }}
    >
      <nav className="container">
        <div>
          {isLoading ? (
            <Skeleton width={100} height={40} />
          ) : (
            <>
              <img src="/weather.logo.png" alt="" />
              <span>Weather</span>
            </>
          )}
        </div>
        <h1>{isLoading ? <Skeleton width={150} /> : location}</h1>
        <div>
          {isLoading ? (
            <>
              <Skeleton width={120} height={35} />
              <Skeleton width={120} height={35} style={{ marginLeft: "8px" }} />
            </>
          ) : (
            <>
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
                <option value={Lang.uz}>O'zbek</option>
                <option value={Lang.eng}>English</option>
                <option value={Lang.ru}>Русский</option>
              </select>
            </>
          )}
        </div>
      </nav>

      <div className="container">
        {isLoading ? (
          <Skeleton height={100} count={7} style={{ marginBottom: "1rem" }} />
        ) : (
          <WeatherCard data={data.forecast.forecastday} />
        )}
      </div>
    </div>
  );
};

export default Home;
