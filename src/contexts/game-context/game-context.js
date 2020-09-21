import React, { useReducer, useContext } from "react";
import { produce } from "immer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import initialState from "../initial-state";
import {IS_ALL_GROUPED, SET_ACTIVE_TILE} from "../../constants/action-types";

const GameContext = React.createContext(initialState);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case IS_ALL_GROUPED:
      return produce(state, (draft) => {
        draft.isAllGrouped = payload;
      });
    case SET_ACTIVE_TILE:
      return produce(state, (draft) => {
        draft.activeTile = payload;
      });
    default:
      return state;
  }
};

export const useGame = () => useContext(GameContext);

export default function GameProvider({ children }) {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={[ state, dispatcher ]}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </GameContext.Provider>
  );
}
