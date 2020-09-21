import React, { useReducer, useContext } from "react";
import { produce } from "immer";

import initialState from "./initial-state";
import {IS_ALL_GROUPED} from "../../constants/action-types";

const GameContext = React.createContext(initialState);

const reducer = (state, {type, payload}) => {
  switch (type) {
    case IS_ALL_GROUPED:
      return produce(state, (draft) => {
        draft.isAllGrouped = payload;
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
