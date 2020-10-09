import React, {useContext, useReducer} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import initialState from "../../store/initial-state";
import reducer from "../../store/reducer";

const GameContext = React.createContext(initialState);


export const useGame = () => useContext(GameContext);

export default function GameProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={[state, dispatch]}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </GameContext.Provider>
  );
}
