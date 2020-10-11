import { SET_AUTHENTICATED } from "./../../actionTypes";

interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

type Actions = { type: typeof SET_AUTHENTICATED; isAuthenticated: boolean };

export default function (state = initialState, action: Actions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return Object.assign({}, state, {
        isLoggedIn: action.isAuthenticated,
      });
    default:
      return state;
  }
}
