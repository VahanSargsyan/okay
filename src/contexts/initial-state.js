import {GAME_PHASES} from "../constants/common-constants";

export default {
  turnOf: 0,
  players: [
    {
      name: 'HeroPlayer',
      score: 0,
      droppedTile: null
    },
    {
      name: 'opponent',
      score: 0,
      droppedTile: null
    },
  ],
  activeTile: null,
  isAllGrouped: false,
  heroTurn: true,
  phase: GAME_PHASES.getting
}
