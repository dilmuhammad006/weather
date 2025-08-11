import { customAxios } from "./base";
import { key } from "../pages/Home/key";
import type { WeatherProps } from "../types";

export const getWeather = async ({ location, lang }: WeatherProps) => {
  try {
    const response = await customAxios.get("", {
      params: {
        key,
        q: location,
        lang: lang || "uz",
        days: 7,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
