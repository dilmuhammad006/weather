import type { Lang } from "./enum";

export interface WeatherProps {
  location: string;
  lang?: Lang;
}
export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    avghumidity: number;
    daily_chance_of_rain: number;
    uv: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
}
export const BackroundImage = {
  Tashkent: "/Tashkent.jfif",
  Samarkand: "/Samarkand.jfif",
  Bukhara: "/Bukhara.jpg",
  Andijan: "/Andijan.jpg",
  Namangan: "/Namangan.jpg",
  Fergana: "/Fergana.jfif",
  Nukus: "/Nukus.jfif",
  Karshi: "/Karshi.jpg",
  Navoi: "/Navoiy.jpg",
};
