function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchDiscussions() {
  await sleep(1000);
  return fakeCourses;
}
