import React from "react";
import Tile from "../tile/tile";

const TilesRow = () => {
  return (
    <div>
      <Tile color="blue" number={8}/>
      <Tile color="blue" number={12}/>
      <Tile color="red" number={6}/>
      <Tile color="yellow" number={4}/>
    </div>
  )
};
export default TilesRow;
