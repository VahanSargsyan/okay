import React, {useEffect} from "react";
import Tile from "../tile/tile";
import DropZone from "../../components/dragble-zone/drop-zone";
import {useTiles} from "../../contexts/tiles-context/tiles-context";
import {checkKare, checkStrait, detectGroups, getGroupType, makeSubGroups} from "../../common-helpers/detect-groups";
import {SET_IS_IN_GROUP} from "../../constants/action-types";
import {GROUP_TYPES} from "../../constants/common-constants";
import MakeTile from "../tile/TileMaker";

function setInGroup(group, rowIndex, isInGroup, dispatch,) {
  group.forEach((tile) => dispatch({
    type: SET_IS_IN_GROUP,
    payload: {
      row: rowIndex, index: tile.index, isInGroup
    }
  }))
}

const TilesRow = ({rowIndex}) => {
  const [state, dispatch] = useTiles();

  useEffect(()=> {
    state.forEach((row, rowIndex) => {
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
      {state[rowIndex].map((tile, index) => tile ?
        <DropZone key={index} row={rowIndex} index={index}><MakeTile row={rowIndex} index={index} {...tile}/></DropZone> :
        <DropZone key={index} row={rowIndex} index={index}/>)}
    </div>
  );
};
export default TilesRow;
