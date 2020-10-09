import React from 'react';

import style from './lobby.module.css'
import LobbyGame from "../../components/lobby-game/lobby-game";

const Lobby = () => (
  <div className={style.root}>
    {Array(16).fill(null).map((value, key) => <LobbyGame key={key}/>)}
  </div>
);

export default Lobby;
