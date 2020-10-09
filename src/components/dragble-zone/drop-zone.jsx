import React from "react";
import {useDrop} from 'react-dnd';

import style from "./drop-zone.module.scss";
import {
  DROP_OPPONENT_TILE,
  DROP_TILE,
  MOVE_TILE,
  POP_OPPONENT_TILE,
  REMOVE_TILE,
  SET_GAME_PHASE
} from "../../constants/action-types";
import {useGame} from "../../contexts/game-context/game-context";
import {getTileFromBank} from "../../actions";
import {GAME_PHASES} from "../../constants/common-constants";
import {navigate} from "@reach/router";

const DropZone = ({children, index, row, canNotDrop, isBank}) => {
  const [state, dispatch] = useGame();

  const [, drop] = useDrop({
    canDrop: () => !canNotDrop,
    accept: 'tile',
    drop: (tile) => {
      if (tile.number > 13) {
        tile = getTileFromBank(state, dispatch)
      }
      dispatch({
        type: REMOVE_TILE,
        payload: state.activeTile || {row: 0, index: -1}
      });
      if (typeof row !== 'number') {
        if (isBank) {
          alert('You win !!!');
          navigate('/')
        }
        dispatch({
          type: DROP_TILE,
          payload: tile
        });
        dispatch({
          type: DROP_OPPONENT_TILE,
          payload: getTileFromBank(state, dispatch)
        });
        dispatch({
          type: SET_GAME_PHASE,
          payload: GAME_PHASES.getting
        })
      } else {
        if (tile.isOpponentTile) {
          dispatch({type: POP_OPPONENT_TILE})
        }
        dispatch({
          type: MOVE_TILE,
          payload: {
            row,
            index,
            tile,
          }
        });
        dispatch({
          type: SET_GAME_PHASE,
          payload: GAME_PHASES.setting
        })
      }
    },
    // collect: monitor => ({
    //   isOver: !!monitor.isOver(),
    // }),
  });

  return (
    <div ref={drop} className={style.root}>
      {children}
    </div>
  )
};

export default DropZone;
