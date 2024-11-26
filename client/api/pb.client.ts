import Pocketbase from "pocketbase";

export let pb: Pocketbase | null = null;

if (typeof window !== "undefined") {
  // @ts-ignore TODO: fix ts error
  pb = new Pocketbase(window.ENV.API_URL);
  pb.authStore.loadFromCookie(document.cookie);
}
