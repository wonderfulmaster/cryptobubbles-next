"use client";

import { CoingeckoCoinData } from "@/types/coingecko.type";
import { useEffect, useRef, useState } from "react";

import Bubbles from "./Bubbles";
export default function BubblesPage({ page, per_page }: any) {
  // const [data, setData] = useCoins();
  const [data, setData] = useState<CoingeckoCoinData[]>([]);
  //const [pageIndex, setPageIndex] = useState(0);
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const getData = async () => {
        // setPageIndex(pageIndex + 1);

        const response = await fetch(
          "https://api.coingecko.com/api/v3/" +
            "coins/markets?" +
            "vs_currency=usd" +
            "&order=market_cap_desc" +
            `&per_page=${per_page}` +
            `&page=${page}` +
            "&sparkline=true" +
            "&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y" +
            "&locale=en" +
            `&x_cg_demo_api_key=CG-MiK8TQtuwhqCvm9chRsiT6gV`
        );

        const data1 = await response.json();
        //console.log(data1.length);
        setData(data1);
      };
      setInterval(getData, 10000);

      getData();
    }
  }, []);

  if (data.length === 0) return;

  return <Bubbles coins={data} />;
}
