import React, {useContext, useReducer} from "react";
import {produce} from "immer";

import {REMOVE_TILE, SET_IS_IN_GROUP, SET_TILE} from "../../constants/action-types";

const initialState = [
  // Array(12).fill(null),
  // Array(12).fill(null)

  [
    null,
    {
      color: 'yellow',
      number: 1,
      isInGroup: false
    },
    {
      color: 'yellow',
      number: 3,
      isInGroup: false
    },
    {
      color: 'yellow',
      number: 2,
      isInGroup: false
    },
    null,
    {
      color: 'yellow',
      number: 8,
      isInGroup: false
    },
    {
      color: 'blue',
      number: 8,
      isInGroup: false
    },
    {
      color: 'red',
      number: 8,
      isInGroup: false
    },
    {
      color: 'black',
      number: 8,
      isInGroup: false
    },
    null,
    {
      color: 'yellow',
      number: 1,
      isInGroup: false
    },
    {
      color: 'black',
      number: 8,
      isInGroup: false
    },
    {
      color: 'yellow',
      number: 3,
      isInGroup: false
    },
  ],
  [null, null, {color: 'blue', number: 8, isInGroup: false}, null, null, null, {
    color: 'black',
    number: 13,
    isInGroup: false
  }, null, {color: 'yellow', number: 1, isInGroup: false}, null, null, null,],

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
        if (!draft[row][index]) {
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
    case SET_IS_IN_GROUP:
      return produce(state, (draft) => {
        const {row, index, isInGroup} = payload;
        draft[row][index].isInGroup = isInGroup;
      });
    default:
      return state;
  }
};

export const useTiles = () => useContext(TilesContext);

export default function TilesProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({state, dispatch});
  return (
    <TilesContext.Provider value={[state, dispatch]}>
      {children}
    </TilesContext.Provider>
  );
}
