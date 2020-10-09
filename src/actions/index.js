import {SET_BANK} from "../constants/action-types";

export const getTileFromBank = ({bank}, dispatch) => {
  bank = [...bank];
  const tile = bank.pop();
  dispatch({
    type: SET_BANK,
    payload: bank
  });

  return tile;
};
