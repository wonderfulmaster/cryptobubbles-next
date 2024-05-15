import { CoingeckoCoinData } from "@/types/coingecko.type";
import Bubbles from "../ui/Bubbles/index";
async function getCoins(): Promise<CoingeckoCoinData[]> {
  const response = await fetch(
    "https://www.coingecko.com/en/all-cryptocurrencies?" +
      "filter_asset_platform=binance-smart-chain" +
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
  // console.log("kkkkkkk", data);
  return data;
}

export default async function EthInfoPaage() {
  //const coins = await getCoins();

  return <Bubbles page={"2"} per_page={"20"} />;
}
