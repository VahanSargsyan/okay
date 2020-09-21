import React from "react";
import style from "./drop-zone.module.scss";

const DropZone = () => (
  <div className={style.root} onDrop={(e) => console.log(e)}/>
);
export default DropZone;
