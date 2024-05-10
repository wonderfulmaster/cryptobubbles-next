import { PriceChangePercentage } from "@/types/bubbles.types";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  bubbleSort: PriceChangePercentage;
  setBubbleSort: React.Dispatch<React.SetStateAction<PriceChangePercentage>>;
};

export default function NavigationBar({ bubbleSort, setBubbleSort }: Props) {
  const items = [
    { label: "hour", sortValue: PriceChangePercentage.HOUR },
    { label: "day", sortValue: PriceChangePercentage.DAY },
    { label: "week", sortValue: PriceChangePercentage.WEEK },
    { label: "month", sortValue: PriceChangePercentage.MONTH },
    { label: "year", sortValue: PriceChangePercentage.YEAR },
  ];
  let [selectFlag, setSelectFlag] = useState(false);
  const clickButtonFunc = (value: React.SetStateAction<PriceChangePercentage>) => {
    setBubbleSort(value);
    //setSelectFlag(true);
  };

  return (
    <ul className="flex gap-1  w-full pt-0 md:py-0 fixed bottom-0 left-0 md:static bg-zinc-950 md:bg-transparent">
      {items.map((item, index) => {
        return (
          <li
            className={clsx(
              "p-2 text-center bg-[#373737] cursor-pointer border-solid border-2 border-[#ff6666] border-t-0 rounded-b-[12px] text-white hover:bg-[#ffffff40] w-1/5 md:w-auto",
              item.sortValue === bubbleSort && "bg-[#aa3333]",
              selectFlag === true && "bg-[#aa3333]"
            )}
            key={Math.random()}
            onClick={() => clickButtonFunc(item.sortValue)}
          >
            <span className="font-bold">{item.label.toUpperCase()}</span>
          </li>
        );
      })}
    </ul>
  );
}
