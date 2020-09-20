import React from "react";
import style from "./tile.module.scss"

const Tile = ({color, number}) => {
  const colorMap = {
    blue: 0,
    red: 13,
    yellow: 26,
    black: 39
  };
  const tileNumber = colorMap[color] + number - 1;
  return <div className={style[`tile-${tileNumber}`]} onDragStart={(e) => console.log(e)}/>
};
export default Tile;
