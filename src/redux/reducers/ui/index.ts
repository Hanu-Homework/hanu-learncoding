import { TOGGLE_DRAWER_OPENED, TOGGLE_REDIRECTING } from "./../../actionTypes";
interface IState {
  isDrawerOpened: boolean;
  isRedirecting: boolean;
}

const initialState: IState = {
  isDrawerOpened: false,
  isRedirecting: false,
};

type Actions =
  | { type: typeof TOGGLE_DRAWER_OPENED; open: boolean }
  | { type: typeof TOGGLE_REDIRECTING };

export default function (state: IState = initialState, action: Actions) {
  switch (action.type) {
    case TOGGLE_DRAWER_OPENED:
      return Object.assign({}, state, {
        isDrawerOpened: action.open,
      });
    case TOGGLE_REDIRECTING:
      return Object.assign({}, state, {
        isRedirecting: !state.isRedirecting,
      });
    default:
      return state;
  }
}
