interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
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
