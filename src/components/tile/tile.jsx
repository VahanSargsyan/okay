import React from "react";
import { useDrag } from 'react-dnd'
import cx from 'classnames'

import style from "./tile.module.scss"
import {useGame} from "../../contexts/game-context/game-context";
import {SET_ACTIVE_TILE} from "../../constants/action-types";

const Tile = ({color, number, row, index}) => {
  const [, dispatcher] = useGame();
  const [{isDragging}, drag] = useDrag({
    item: { type: 'tile', color, number },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const colorMap = {
    blue: 0,
    red: 13,
    yellow: 26,
    black: 39
  };
  const tileNumber = colorMap[color] + number - 1;
  return <div ref={drag} className={cx(style[`tile-${tileNumber}`], {[style.draging]: isDragging})} onDragStart={() => dispatcher({
    type: SET_ACTIVE_TILE,
    payload: {row, index}
  })}/>
};
export default Tile;
