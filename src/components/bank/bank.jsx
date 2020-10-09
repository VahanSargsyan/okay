import React from "react";
import MakeTile from "../tile/tileMaker";
import {useGame} from "../../contexts/game-context/game-context";
import {GAME_PHASES} from "../../constants/common-constants";

const Bank = ({bank}) => {
  const [state] = useGame();
  return (
    <MakeTile color="black" number={15} canNotDrag={state.phase !== GAME_PHASES.getting}>
      {bank.length}
    </MakeTile>
  )
};

export default Bank;
