import {GROUP_TYPES} from "../constants/common-constants";

export function makeSubGroups(tilesRow) {
  return tilesRow.reduce((group, tile) => {
    if (tile === null) group.push([]);
    else group[group.length - 1].push(tile);
    return group;
  }, [[]])
}

export function detectGroups(tilesRow, rowIndex) {
  tilesRow = tilesRow.map((tile, index) => tile ? {...tile, index} : tile);
  const subGroups = makeSubGroups(tilesRow);
  const filteredGroup = subGroups.filter((tilesGroup) => tilesGroup.length > 2);
  const groups = [];

  filteredGroup.forEach((group) => {
    const groupDetector = (getGroupType(...group) === GROUP_TYPES.strait) ? checkStrait : checkKare;
    groupDetector(group) && groups.push(group);
  });
  return groups;
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
