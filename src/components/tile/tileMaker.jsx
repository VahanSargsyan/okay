import React from "react";
import Tile from "./tile";

import {SET_ACTIVE_TILE, SET_IS_ALL_GROUPED} from "../../constants/action-types";
import {useGame} from "../../contexts/game-context/game-context";
import {ROW_LENGTH} from "../../constants/common-constants";


const MakeTile = ({color, number, row, index, isInGroup, children, canNotDrag, isOpponentTile}) => {
    const [state, dispatch] = useGame();

    const callback = typeof row === 'number' && typeof index === 'number'
      ? () => {
        let {tiles} = state.players.main;
        const indexOfActiveTile = row * ROW_LENGTH + index;

        tiles = [...tiles[0], ...tiles[1]];

        const isAllGrouped = tiles
          .every((tile, index) => {
            if (tile === null || index === indexOfActiveTile) return true;
            return tile.isInGroup
          });

        dispatch({
          type: SET_ACTIVE_TILE,
          payload: {row, index}
        });

        dispatch({
          type: SET_IS_ALL_GROUPED,
          payload: isAllGrouped
        });
      }
      : () => null;


    return <Tile {...{color, number, isInGroup, callback, isOpponentTile}} canDrag={!canNotDrag}>{children}</Tile>
  }
;

export default MakeTile
