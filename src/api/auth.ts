function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function signIn() {
  await sleep(1000);
}
