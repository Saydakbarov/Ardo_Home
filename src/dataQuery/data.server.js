import { useQuery } from "@tanstack/react-query";
import { getNews } from "./data.fn";

export const useNews = (params) =>
  useQuery({ queryFn: () => getNews(params), queryKey: ["news"] });
