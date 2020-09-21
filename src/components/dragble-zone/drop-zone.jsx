import React from "react";
import {useDrop} from 'react-dnd';

import style from "./drop-zone.module.scss";
import {useTiles} from "../../contexts/tiles-context/tiles-context";
import {REMOVE_TILE, SET_TILE} from "../../constants/action-types";
import {useGame} from "../../contexts/game-context/game-context";

const DropZone = ({children, index, row}) => {
  const [, dispatcher] = useTiles();
  const [gameState] = useGame();
  const [, drop] = useDrop({
    accept: 'tile',
    drop: (tile) => {
      dispatcher({
        type: SET_TILE,
        payload: {
          row,
          index,
          tile,
        }
      });
      dispatcher({
        type: REMOVE_TILE,
        payload: gameState.activeTile
      })
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
