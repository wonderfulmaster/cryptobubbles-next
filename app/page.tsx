import { CoingeckoCoinData } from "@/types/coingecko.type";
import Bubbles from "./ui/Bubbles/Bubbles";
export const dynamic = "force-dynamic";

async function getCoins(): Promise<CoingeckoCoinData[]> {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/" +
      "coins/markets?" +
      "vs_currency=usd" +
      "&order=market_cap_desc" +
      "&per_page=100" +
      `&page=${1}` +
      "&sparkline=true" +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y" +
      "&locale=en" +
      `&x_cg_demo_api_key=CG-MiK8TQtuwhqCvm9chRsiT6gV`
  );
  //curl -X GET '   https://api.lynxcrypto.app/v1/tokens/search?searchString=&chains=1,56'
  // const pattern = /[A-Za-z]+/;
  // const response = await fetch("https://api.lynxcrypto.app/v1/tokens/metadata?tokenId=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d:56", {
  //   headers: {
  //     "x-api-key": "NVRy5WtjAr1dAO9sT8HfUbaBLZNlX6Y73sCQTBXj",
  //   },
  // });
  const data = await response.json();
  return data;
}

export default async function Main() {
  const coins = await getCoins();
  console.log("PPPPPPP", coins, coins.length);
  return <Bubbles coins={coins} />;
}
