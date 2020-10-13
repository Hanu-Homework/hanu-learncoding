import fakeCourses from "../fakeData/courses";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchCourses() {
  await sleep(1000);
  return fakeCourses;
}
