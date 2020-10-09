import React from 'react';

import style from './table.module.css'
import Bank from "../bank/bank";
import DropZone from "../dragble-zone/drop-zone";
import Nameplate from "../nameplate/nameplate";
import {useGame} from "../../contexts/game-context/game-context";
import MakeTile from "../tile/tileMaker";
import {GAME_PHASES} from "../../constants/common-constants";

const Table = () => {
  const [{players, bank, phase, isAllGrouped}] = useGame();
  return (
    <div className={style.table}>
      <div className={style.left}/>
      <div className={style.center}>
        <div className={style.top}>
          <DropZone canNotDrop={true}>{
            players.opponents[0].droppedTile.length
              ?
              <MakeTile {...players.opponents[0].droppedTile.slice(-1)[0]} canNotDrag={phase === GAME_PHASES.setting}/>
              : null}
          </DropZone>
          <Nameplate {...players.opponents[0]}/>
        </div>
        <div className={style.bank}>
          <Bank bank={bank}/>
          <DropZone canNotDrop={!isAllGrouped} isBank={true}/>
        </div>
        <div className={style.bottom}>
          <Nameplate {...players.main}/>
          <DropZone canNotDrop={phase === GAME_PHASES.getting}>{players.main.droppedTile ?
            <MakeTile {...players.main.droppedTile}/> : null}</DropZone>
        </div>
      </div>
      <div className={style.right}/>
    </div>
  )
};

export default Table;
