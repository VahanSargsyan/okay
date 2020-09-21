import React, {useContext, useReducer} from "react";
import {produce} from "immer";

import {SET_TILE, REMOVE_TILE} from "../../constants/action-types";

const initialState = [
  // Array(12).fill(null),
  // Array(12).fill(null)

  [null, null, null, null, null, {color: 'blue', number: 4}, {color: 'black', number: 13}, null, {color: 'red', number: 7}, null, null, null,],
  [null, null,  {color: 'blue', number: 8}, null, null, null, {color: 'black', number: 13}, null, {color: 'yellow', number: 1}, null, null, null,]

];

const TilesContext = React.createContext(initialState);

const reducer = (state, {type, payload}) => {
  switch (type) {
  //   case TAKE_TILE:
  //     return produce(state, (draft) => {
  //       const {row, index} = payload;
  //       draft[row][index] = null;
  //     });
    case SET_TILE:
      return produce(state, (draft) => {
        const {row, index, tile} = payload;
        if(!draft[row][index]) {
          draft[row][index] = tile;
        } else {
          // todo: create logic for tile regrouping
        }
      });
    case REMOVE_TILE:
      return produce(state, (draft) => {
        const {row, index} = payload;
          draft[row][index] = null;
      });
    default:
      return state;
  }
};

export const useTiles = () => useContext(TilesContext);

export default function TilesProvider({children}) {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <TilesContext.Provider value={[state, dispatcher]}>
      {children}
    </TilesContext.Provider>
  );
}
