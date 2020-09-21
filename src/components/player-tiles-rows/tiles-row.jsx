import React from "react";
import Tile from "../tile/tile";
import DropZone from "../../components/dragble-zone/drop-zone";

const TilesRow = () => {
  return (
    <div>
      <DropZone>
        <Tile color="blue" number={8} />
      </DropZone>

      <Tile color="blue" number={12} />
      <Tile color="red" number={6} />
      <Tile color="yellow" number={4} />
    </div>
  );
};
export default TilesRow;
