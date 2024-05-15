import { CoinsArray } from "@/types/coingecko.type";

export const getCoinsByAPI = async (page: number = 1): Promise<CoinsArray> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/" +
      "coins/markets?" +
      "vs_currency=usd" +
      "&order=market_cap_desc" +
      "&per_page=5" +
      `&page=${page}` +
      "&sparkline=true" +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y" +
      "&locale=en" +
      `&x_cg_demo_api_key=CG-MiK8TQtuwhqCvm9chRsiT6gV`
  );

  let data = await response.json();
  return data;
};
