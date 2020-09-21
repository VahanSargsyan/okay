import React from "react";
import Tile from "../../components/tile/tile";
import DropZone from "../../components/dragble-zone/drop-zone";
import TilesRows from "../../components/player-tiles-rows/player-tiles-rows";

import style from "./game-room.module.scss"
import GameProvider from "../../contexts/game-context/game-context";

const GameRoom = () => {
  return (
    <GameProvider>
      <div className={style.root}>
        <Tile color="black" number={10}/>
        <Tile color="blue" number={11}/>
        <DropZone/>
        <TilesRows/>
      </div>
    </GameProvider>
  );
};

export default GameRoom;
