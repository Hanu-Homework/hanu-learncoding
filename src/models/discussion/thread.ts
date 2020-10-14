import User from "../user/user";

export type ThreadGroup =
  | "trending"
  | "mostRecent"
  | "unanswered"
  | "myQuestions"
  | "myAnswers";

interface Thread {
  numberOfVotes: number;
  numberOfAnswers: number;
  title: string;
  createdBy: User;
  dateTime: Date;
  group: ThreadGroup;
}

export const threadGroupNameMap = {
  trending: "Trending",
  mostQuestions: "Most Questions",
  unanswered: "Unanswered",
  myQuestions: "My Questions",
  myAnswers: "My Answers",
};

export default Thread;
