import React, { useReducer, useContext } from "react";
import { produce } from "immer";

import {IS_ALL_GROUPED, GET_TILE} from "../../constants/action-types";

const initialState = [
    Array(12).fill(null),
    Array(12).fill(null)
];

const GameContext = React.createContext(initialState);

const reducer = (state, {type, payload}) => {
  switch (type) {
    case GET_TILE:
      return produce(state, (draft) => {
        const { row, tile, index } = payload
        draft[row] = null;
      });
    default:
      return state;
  }
};

export const useGame = () => useContext(GameContext);

export default function GameProvider({ children }) {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatcher }}>
      {children}
    </GameContext.Provider>
  );
}
