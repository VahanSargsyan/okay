import React from 'react';

import {navigate} from '@reach/router';

import style from './lobby.module.css'
import LobbyGame from "../../components/lobby-game/lobby-game";

const Lobby = () => (
  <div className={style.root}>
    {Array(16).fill(null).map(() => <LobbyGame />)}
  </div>
);

export default Lobby;
