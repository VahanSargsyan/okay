import React from "react";
import style from "./player-tiles-rows.module.css"
import TilesRow from "./tiles-row";

const TilesRows = () => <div className={style.root}>
  <TilesRow rowIndex={0}/>
  <TilesRow rowIndex={1}/>
</div>;

export default TilesRows;
