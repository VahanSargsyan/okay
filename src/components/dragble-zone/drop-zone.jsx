import React from "react";
import { useDrop } from 'react-dnd';

import style from "./drop-zone.module.scss";

const DropZone = ({ children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'tile',
    drop: () => (unkown) => console.log({unkown}),
    // collect: monitor => ({
    //   isOver: !!monitor.isOver(),
    // }),
  });

  return (
  <div ref={drop} className={style.root}>
    {children}
  </div>
)};

export default DropZone;
