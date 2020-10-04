import {COLORS_MAP} from "../constants/common-constants";

export const createTiles = () => {
  const bank = [];
  for (let key in COLORS_MAP) {
    for (let i = 1; i <= 13; i++) {
      bank.push({color: key, number: i})
    }
  }
  return [...bank, ...bank, ...bank].sort(() => Math.random() - Math.random())
};

export const getTilesSet = (bank, setCount) => bank.length > setCount
  ? [bank, bank.splice(-setCount)]
  : [[], bank];
