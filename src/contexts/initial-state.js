import {GAME_PHASES} from "../constants/common-constants";

export default {
  turnOf: 0,
  players: {
    main: {
      name: 'HeroPlayer',
      score: 0,
      droppedTile: null,
      tiles: [
        [
          null,
          {
            color: 'yellow',
            number: 1,
            isInGroup: false
          },
          {
            color: 'yellow',
            number: 3,
            isInGroup: false
          },
          {
            color: 'yellow',
            number: 2,
            isInGroup: false
          },
          null,
          {
            color: 'yellow',
            number: 8,
            isInGroup: false
          },
          {
            color: 'blue',
            number: 8,
            isInGroup: false
          },
          {
            color: 'red',
            number: 8,
            isInGroup: false
          },
          {
            color: 'black',
            number: 8,
            isInGroup: false
          },
          null,
          {
            color: 'yellow',
            number: 1,
            isInGroup: false
          },
          {
            color: 'black',
            number: 8,
            isInGroup: false
          },
          {
            color: 'yellow',
            number: 3,
            isInGroup: false
          },
        ],
        [null, null, {color: 'blue', number: 8, isInGroup: false}, null, null, null, {
          color: 'black',
          number: 13,
          isInGroup: false
        }, null, {color: 'yellow', number: 1, isInGroup: false}, null, null, null,],

      ]
    },
    opponents: [
      {
        name: 'opponent',
        score: 0,
        droppedTile: null
      }
    ]

  },
  bank: {},
  activeTile: null,
  isAllGrouped: false,
  heroTurn: true,
  phase: GAME_PHASES.getting
}
