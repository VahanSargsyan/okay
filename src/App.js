import React from 'react';
import {Router} from '@reach/router';

import Lobby from './pages/lobby/lobby'
import GameRoom from './pages/game-room/game-room'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Lobby path='/'/>
        <GameRoom path='/game'/>
      </Router>
    </div>
  );
}

export default App;
