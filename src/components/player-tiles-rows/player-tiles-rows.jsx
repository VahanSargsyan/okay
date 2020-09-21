import React from "react";
import style from "./player-tiles-rows.module.css"
import TilesRow from "./tiles-row";
import TilesProvider from "../../contexts/tiles-context/tiles-context";

const TilesRows = () => <div className={style.root}>
  <TilesProvider>
    <TilesRow rowIndex={0}/>
    <TilesRow rowIndex={1}/>
  </TilesProvider>
</div>;

export default TilesRows;
