import React, {useEffect} from "react";
import DropZone from "../../components/dragble-zone/drop-zone";
import {brokeToGroups, checkKare, checkStrait, getGroupType, makeSubGroups} from "../../common-helpers/tiles-group";
import {SET_BANK, SET_IS_IN_GROUP, SET_TILES} from "../../constants/action-types";
import {GROUP_TYPES} from "../../constants/common-constants";
import MakeTile from "../tile/tileMaker";
import {useGame} from "../../contexts/game-context/game-context";
import {getTilesSet} from "../../common-helpers/bank";

function setInGroup(group, rowIndex, isInGroup, dispatch,) {
  group.forEach((tile) => dispatch({
    type: SET_IS_IN_GROUP,
    payload: {
      row: rowIndex, index: tile.index, isInGroup
    }
  }))
}

const TilesRow = ({rowIndex}) => {
  const [state, dispatch] = useGame();

  useEffect(() => {
    getTilesSet(state.bank, 12); // opponent tiles imitation
    const [bank, tiles] = getTilesSet(state.bank, 12);
    dispatch({
      type: SET_BANK,
      payload: bank
    });
    dispatch({
      type: SET_TILES,
      payload: brokeToGroups(tiles)
    });

  }, []);

  useEffect(() => {
    state.players.main.tiles.forEach((row, rowIndex) => {
      row = row.map((tile, index) => tile ? {...tile, index} : tile);
      const groupedRow = makeSubGroups(row);
      groupedRow.forEach((group) => {
        if (group.length > 2) {
          const groupType = getGroupType(...group);
          if (groupType) {
            const groupDetector = (groupType === GROUP_TYPES.strait) ? checkStrait : checkKare;
            if (groupDetector(group)) {
              setInGroup(group, rowIndex, true, dispatch);
            } else {
              setInGroup(group, rowIndex, false, dispatch);
            }
          } else {
            setInGroup(group, rowIndex, false, dispatch);
          }
        } else {
          setInGroup(group, rowIndex, false, dispatch);
        }
      })
    });
  });


  return (
    <div>
      {state.players.main.tiles[rowIndex].map((tile, index) => tile ?
        <DropZone key={index} row={rowIndex} index={index}><MakeTile row={rowIndex}
                                                                     index={index} {...tile}/></DropZone> :
        <DropZone key={index} row={rowIndex} index={index}/>)}
    </div>
  );
};
export default TilesRow;
