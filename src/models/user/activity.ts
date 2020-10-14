type UserActivityType =
  | "completedOneChallenge"
  | "completedCourse"
  | "completedMultipleChallenges"
  | "reachedNewLevel"
  | "startedLearningCourse"
  | "unlockNewBadge"
  | "joinedSololearn";

// this will definitely be in a different table / collection
interface UserActivity {
  type: UserActivityType;
  detail: UserActivityDetail;
}

interface UserActivityDetail {
  dateTime: Date;
  description: string;
}

interface CompletedOneChallengeActivityDetail extends UserActivityDetail {}

interface CompletedCourseActivityDetail extends UserActivityDetail {}

interface CompletedMultipleChallengesActivityDetail
  extends UserActivityDetail {}

interface ReachedNewLevelActivityDetail extends UserActivityDetail {}

interface StartedLearningCourseActivityDetail extends UserActivityDetail {}

interface UnlockNewBadgeActivityDetail extends UserActivityDetail {}

export default UserActivity;
