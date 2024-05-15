"use client";
import { type CoinsArray } from "@/types/coingecko.type";
import React, { createContext, useState } from "react";

const useCoinsState = (initialCoins: CoinsArray) => useState<CoinsArray>(initialCoins);

export const CoinsContext = createContext<ReturnType<typeof useCoinsState> | null>(null);

export const useCoins = () => {
  const coins = React.useContext(CoinsContext);
  if (!coins) {
    throw new Error("useCoins must be used within a CoinsProvider");
  }
  return coins;
};

const CoinsProvider = ({ coins: initialCoins, children }: { coins: CoinsArray; children: React.ReactNode }) => {
  const [coins, setCoins] = useCoinsState(initialCoins);

  return <CoinsContext.Provider value={[coins, setCoins]}>{children}</CoinsContext.Provider>;
};

export default CoinsProvider;
