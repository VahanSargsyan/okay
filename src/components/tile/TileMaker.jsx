import React from "react";
import Tile from "./tile";

import {SET_ACTIVE_TILE} from "../../constants/action-types";
import {useGame} from "../../contexts/game-context/game-context";



const MakeTile = ({color, number, row, index, isInGroup, children}) => {
  const [, dispatch] = useGame();

  const callback =  (!row && !index) ? () => null :  () => dispatch({
    type: SET_ACTIVE_TILE,
    payload: {row, index}
  }) ;


  return <Tile {...{color, number, isInGroup, callback }} >{children}</Tile>
};

export default MakeTile
