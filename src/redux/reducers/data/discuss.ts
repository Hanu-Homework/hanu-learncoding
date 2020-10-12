import { ThreadGroup } from "./../../../models/discussion/thread";
import Thread from "../../../models/discussion/thread";

interface IState {
  threads: Thread[];
  threadOrder: ThreadGroup;
  querySearchValue: string;
}

const initialState: IState = {
  threads: [],
  threadOrder: "mostRecent",
  querySearchValue: "",
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
