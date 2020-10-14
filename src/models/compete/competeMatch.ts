import user from "../../redux/reducers/user";
import ProgrammingLanguages from "../programmingLanguages";
import User from "../user/user";
import MatchDetail from "./matchInformation";

interface CompeteMatch {
  fromUser: User;
  toUser: User;
  language: ProgrammingLanguages;
  result: {
    fromScore: number;
    toScore: number;
  };
  completedAt: Date;
  sentAt: Date;
  detail: MatchDetail;
}

export default CompeteMatch;
