import React from "react";
import { useDrag } from 'react-dnd'
import cx from 'classnames'

import style from "./tile.module.scss"

const Tile = ({color, number}) => {
  const [{isDragging}, drag] = useDrag({
    item: { type: 'tile' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  
  const colorMap = {
    blue: 0,
    red: 13,
    yellow: 26,
    black: 39
  };
  const tileNumber = colorMap[color] + number - 1;
  return <div ref={drag} className={cx(style[`tile-${tileNumber}`], {[style.draging]: isDragging})} onDragStart={(e) => console.log(e)}/>
};
export default Tile;
