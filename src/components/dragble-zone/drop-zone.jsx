import React from "react";
import {useDrop} from 'react-dnd';

import style from "./drop-zone.module.scss";
import {useTiles} from "../../contexts/tiles-context/tiles-context";
import {DROP_TILE, REMOVE_TILE, SET_TILE} from "../../constants/action-types";
import {useGame} from "../../contexts/game-context/game-context";
import {useTable} from "../../contexts/table-context/table-context";

const DropZone = ({children, index, row}) => {
  const [state, dispatch] = useTiles();
  const usedTable = useTable();
  console.log({usedTable, index, row});
  const [gameState] = useGame();

  const [, drop] = useDrop({
    canDrop: () => true,
    accept: 'tile',
    drop: (tile) => {
      if (typeof dispatch !== 'function') {
        console.log({usedTable, index, row});
       usedTable[1]({type: DROP_TILE,
       payload: tile})
      } else {
        dispatch({
          type: REMOVE_TILE,
          payload: gameState.activeTile
        });
        dispatch({
          type: SET_TILE,
          payload: {
            row,
            index,
            tile,
          }
        });
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
