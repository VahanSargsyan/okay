import React, {createContext, useContext, useReducer} from "react";
import {createTiles} from "../../common-helpers/bank";
import {PLAYER_POSITIONS} from "../../constants/common-constants";
import {DROP_TILE} from "../../constants/action-types";
import {produce} from "immer";

const initialState = {
  bank: createTiles(),
  players: [
    {
      name: 'Hero Player',
      score: 0,
      droppedTile: null,
      position: PLAYER_POSITIONS.bottom
    },
    {
      name: 'Homeros',
      score: 0,
      droppedTile: null,
      position: PLAYER_POSITIONS.top
    }
  ]
};
const TableContext = createContext(initialState);

const reducer = (state, {type, payload}) => {

  switch (type) {
    case DROP_TILE:
      return produce(state, (draft) => {
        draft.players[0].droppedTile = payload;
      });
    default:
      return state;
  }
};

export const useTable = () => useContext(TableContext);

const TableProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TableContext.Provider value={[state, dispatch]}>
      {children}
    </TableContext.Provider>
  )
};

export default TableProvider;
