import React from "react";
import Tile from "../tile/tile";
import DropZone from "../../components/dragble-zone/drop-zone";
import {useTiles} from "../../contexts/tiles-context/tiles-context";

const TilesRow = ({rowIndex}) => {
  const [state] = useTiles();

  console.log(state[rowIndex]);
  return (
    <div>
      {state[rowIndex].map((tile, index) => tile ?
        <DropZone key={index} row={rowIndex} index={index}><Tile row={rowIndex} index={index} {...tile}/></DropZone> :
        <DropZone key={index} row={rowIndex} index={index}/>)}
    </div>
  );
};
export default TilesRow;
