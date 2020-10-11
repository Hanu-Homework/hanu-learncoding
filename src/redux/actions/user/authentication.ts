import { SET_AUTHENTICATED } from "../../actionTypes";

export function setAuthenticated(isAuthenticated: boolean) {
  return {
    type: SET_AUTHENTICATED,
    isAuthenticated: isAuthenticated,
  };
}
