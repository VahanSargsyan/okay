import React from "react";

import style from './lobby-game.module.css'
import {navigate} from "@reach/router";

const LobbyGame = () => <div onClick={() => navigate('/game')} className={style.root} >Play</div>;

export default LobbyGame;
