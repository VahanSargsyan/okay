import React from "react";
import style from "./player-tiles-rows.module.css"
import TilesRow from "./tiles-row";

const TilesRows = () => <div className={style.root}>
  <TilesRow/>
  <TilesRow/>
</div>;

export default TilesRows;
