import React from "react";

import stle from './nameplate.module.css';

const Nameplate = ({name, score}) => {
  return (
    <div className={stle.root}>
      <p>{name}</p>
      <p>score: {score}</p>
    </div>
  )
};

export default Nameplate;
