interface IState {
  isDrawerOpened: boolean;
}

const initialState: IState = {
  isDrawerOpened: false,
};
type Actions = { type: ""; action: string };

export default function (state = initialState, action: Actions) {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
}
