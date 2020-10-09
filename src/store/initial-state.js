import {GAME_PHASES} from "../constants/common-constants";
import {createTiles} from "../common-helpers/bank";

export default {
  turnOf: 0,
  players: {
    main: {
      name: 'HeroPlayer',
      score: 0,
      droppedTile: null,
      tiles: [[], []]
    },
    opponents: [
      {
        name: 'opponent',
        score: 0,
        droppedTile: []
      }
    ]

  },
  bank: createTiles(),
  activeTile: null,
  isAllGrouped: false,
  heroTurn: true,
  phase: GAME_PHASES.getting
}
