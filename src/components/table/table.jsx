import React from 'react';

import style from './table.module.css'
import Bank from "../bank/bank";
import DropZone from "../dragble-zone/drop-zone";
import Nameplate from "../nameplate/nameplate";
import {useGame} from "../../contexts/game-context/game-context";
import {useTable} from "../../contexts/table-context/table-context";

const Table = ({children}) => {
  const [{players, bank}, dispatch] = useTable();
  console.log({dispatch});

  return (
    <div className={style.table}>
      <div className={style.left}/>
      <div className={style.center}>
        <div className={style.top}>
          <DropZone />
          <Nameplate name="Homeros" score={10}/>
        </div>
        <div className={style.bank}>
          <Bank/>
          <DropZone/>
        </div>
        <div className={style.bottom}>
          <Nameplate name="Heros" score={10}/>
          <DropZone />
        </div>
      </div>
      <div className={style.right}/>
    </div>
  )
};

export default Table; // <TableProvider><Table/></TableProvider>;
