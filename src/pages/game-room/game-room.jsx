import React from "react";
import TilesRows from "../../components/player-tiles-rows/player-tiles-rows";

import style from "./game-room.module.scss"
import GameProvider from "../../contexts/game-context/game-context";
import Table from "../../components/table/table";
import TableProvider from "../../contexts/table-context/table-context";

const GameRoom = () => {
  return (
    <GameProvider>
      <div className={style.root}>
        <div className={style.gameContainer}>
          <TableProvider>
            <Table/>
          </TableProvider>
          <TilesRows/>
        </div>
      </div>
    </GameProvider>
  );
};

export default GameRoom;
