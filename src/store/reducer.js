import {
  DROP_OPPONENT_TILE,
  DROP_TILE,
  MOVE_TILE,
  POP_OPPONENT_TILE,
  REMOVE_TILE,
  SET_ACTIVE_TILE,
  SET_BANK,
  SET_GAME_PHASE,
  SET_IS_ALL_GROUPED,
  SET_IS_IN_GROUP,
  SET_TILES
} from "../constants/action-types";
import {produce} from "immer";

const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_IS_ALL_GROUPED:
      return produce(state, (draft) => {
        draft.isAllGrouped = payload;
      });
    case SET_ACTIVE_TILE:
      return produce(state, (draft) => {
        draft.activeTile = payload;
      });
    case SET_TILES:
      return produce(state, (draft) => {
        draft.players.main.tiles = payload;
      });

    case DROP_TILE:
      return produce(state, (draft) => {
        draft.players.main.droppedTile = {...payload, canNotDrag: true};
      });
    case DROP_OPPONENT_TILE:
      return produce(state, (draft) => {
        draft.players.opponents[0].droppedTile.push({...payload, canNotDrag: false, isOpponentTile: true});
      });
    case MOVE_TILE:
      return produce(state, (draft) => {
        const {row, index, tile} = payload;
        if (typeof row === 'number' && typeof index === 'number') {
          if (!state.players.main.tiles[row][index]) {
            draft.players.main.tiles[row][index] = tile;
          } else {
            draft.players.main.tiles[0][state.players.main.tiles[0].indexOf(null)] = tile;
          }
        }
      });
    case REMOVE_TILE:
      return produce(state, (draft) => {
        const {row, index} = payload;
        draft.players.main.tiles[row][index] = null;
      });
    case SET_IS_IN_GROUP:
      return produce(state, (draft) => {
        const {row, index, isInGroup} = payload;
        if (!state.players.main.tiles[row][index]) {
          return;
        }
        draft.players.main.tiles[row][index].isInGroup = isInGroup;
      });
    case SET_BANK:
      return produce(state, (draft) => {
        draft.bank = payload;
      });
    case SET_GAME_PHASE:
      return produce(state, (draft) => {
        draft.phase = payload;
      });
    case POP_OPPONENT_TILE:
      return produce(state, (draft) => {
        draft.players.opponents[0].droppedTile.pop();
      });
    default:
      return state;
  }
};

export default reducer;
