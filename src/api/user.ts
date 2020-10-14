import fakeOtherUsers from "../fakeData/users/users";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchLeaderboardUsers() {
  await sleep(1000);

  return fakeOtherUsers;
}
