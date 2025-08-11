import type { ForecastDay } from "../../types";
import styles from "./weather.module.css";
interface DataProps {
  data: ForecastDay[];
}

const Weather = ({ data }: DataProps) => {
  const today = data[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.forecastContainer}>
        {data.map((day) => (
          <div key={day.date} className={styles.forecastItem}>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className={styles.weatherIcon}
            />
            <div>
              <strong>
                {new Date(day.date).toLocaleDateString("uz-UZ", {
                  weekday: "long",
                })}
              </strong>
              <p className={styles.tempRange}>
                {day.day.maxtemp_c}° / {day.day.mintemp_c}°
              </p>
              <small className={styles.conditionText}>
                {day.day.condition.text}
              </small>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.todayCard}>
        <h2>Today</h2>
        <div className={styles.todayMain}>
          <img
            src={today.day.condition.icon}
            alt={today.day.condition.text}
            className={styles.todayIcon}
          />
          <div>
            <p className={styles.todayTemp}>{today.day.maxtemp_c}°</p>
            <small>{today.day.condition.text}</small>
          </div>
        </div>
        <ul className={styles.todayDetails}>
          <li>
            <strong>Min:</strong> {today.day.mintemp_c}°
          </li>
          <li>
            <strong>Wind:</strong> {today.day.maxwind_kph} km/h
          </li>
          <li>
            <strong>Humidity:</strong> {today.day.avghumidity}%
          </li>
          <li>
            <strong>UV Index:</strong> {today.day.uv}
          </li>
          <li>
            <strong>Chance of Rain:</strong> {today.day.daily_chance_of_rain}%
          </li>
          <li>
            <strong>Sunrise:</strong> {today.astro.sunrise}
          </li>
          <li>
            <strong>Sunset:</strong> {today.astro.sunset}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
