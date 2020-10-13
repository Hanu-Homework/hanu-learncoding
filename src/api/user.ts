import fakeLeaderboardUsers from "../fakeData/users";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchLeaderboardUsers() {
  await sleep(1000);

  return fakeLeaderboardUsers;
}
