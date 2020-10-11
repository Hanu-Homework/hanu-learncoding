interface LeaderboardUser {
  name: string;
  mediaSrc: {
    avatar: string;
  };
  record: {
    courseID: string;
    point: number;
  };
}

export default LeaderboardUser;
