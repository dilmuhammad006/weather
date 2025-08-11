import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://api.weatherapi.com/v1/forecast.json",
});
