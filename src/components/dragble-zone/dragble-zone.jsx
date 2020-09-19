import React from "react";
import style from "./dragble-zone.module";

export default () => (
  <div className={style.root} onDrag={(e) => console.log(e)}></div>
);
