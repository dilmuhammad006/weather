import { useQuery } from "@tanstack/react-query";
import type { Lang, Location } from "../../types/enum";
import { getWeather } from "../../api";

interface Props {
  lang: Lang;
  location: Location;
}

export const GetWeather = ({ lang, location }: Props) => {
  return useQuery({
    queryKey: ["weather", lang, location],
    queryFn: () => getWeather({ lang, location }),
  });
};
