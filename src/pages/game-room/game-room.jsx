import React from "react";
import Tile from "../../components/tile/tile";

const GameRoom = () => {
  return (
    <div className="game-room">
      <p>a tat at</p>
      <Tile color="black" number={10}/>
      <Tile color="blue" number={11}/>
    </div>
  );
};

export default GameRoom;
