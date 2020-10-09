import {GROUP_TYPES, ROW_LENGTH} from "../constants/common-constants";

export function makeSubGroups(tilesRow) {
  return tilesRow.reduce((group, tile) => {
    if (tile === null) group.push([]);
    else group[group.length - 1].push(tile);
    return group;
  }, [[]])
}

export function getGroupType(lastTile, currentTile) {
  if (lastTile.color === currentTile.color && lastTile.number !== currentTile.number) {
    return GROUP_TYPES.strait;
  } else if (lastTile.color !== currentTile.color && lastTile.number === currentTile.number) {
    return GROUP_TYPES.kare;
  } else {
    return null;
  }
}

export function checkStrait(tilesGroup) {
  tilesGroup.sort((a, b) => a.number - b.number);
  return !!tilesGroup.reduce((prev, current) => prev && current.number === prev.number + 1 ? current : false)
}

export function checkKare(tilesGroup) {
  if (tilesGroup.length > 4) return false;

  const uniqueColors = new Set();
  const [{number: firstTileNumber}] = tilesGroup;

  for (let tile of tilesGroup) {
    uniqueColors.add(tile.color);
    if (tile.number !== firstTileNumber) return false;
  }

  return uniqueColors.size === tilesGroup.length;
}

const getEmptyRow = (length) => Array(length).fill(null);
const fillArrayTo = (array, to) => {
  if (array.length > to) {
    array.length = to;
    return array;
  }
  const dif = to - array.length;
  return array.concat(getEmptyRow(dif));
};


export function brokeToGroups(tilesArray) {
  const rowLength = Math.floor(tilesArray.length / 2);
  const firsRov = tilesArray.splice(rowLength);
  return [
    fillArrayTo(firsRov, ROW_LENGTH),
    fillArrayTo(tilesArray, ROW_LENGTH),
  ]
  // todo add some real grouping logic
}
