interface IState {
  threads: any[];
}

const initialState: IState = {
  threads: [],
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
