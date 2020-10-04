import React from "react";
import Tile from "../tile/tile";
import {createTiles} from "../../common-helpers/bank";

const Bank = () => {
  const tilesBank = createTiles();
  return (
    <Tile color="black" number={15}>
      {tilesBank.length}
    </Tile>
  )
}

export default Bank;
