import { CoingeckoCoinData } from "@/types/coingecko.type";
import Bubbles from "./ui/Bubbles/index";

let index: number = 0;
async function getCoins(): Promise<CoingeckoCoinData[]> {
  index++;
  const response = await fetch(
    "https://api.coingecko.com/api/v3/" +
      "coins/markets?" +
      "vs_currency=usd" +
      "&order=market_cap_desc" +
      "&per_page=30" +
      `&page=${1}` +
      "&sparkline=true" +
      "&filter_asset_platform=binance-smart-chain" +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y" +
      "&locale=en" +
      `&x_cg_demo_api_key=CG-MiK8TQtuwhqCvm9chRsiT6gV`
  );

  const data = await response.json();
  // getAll = data;
  console.log("1111", data);
  return data;
}

export default async function Main() {
  // const dd = await setInterval(getCoins, 1000);
  //  const coins = await getCoins();
  // console.log(getAll);
  return <Bubbles page={"1"} per_page={"40"} />;
}
