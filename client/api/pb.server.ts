import Pocketbase from "pocketbase";
import { getCookie, getEvent } from "vinxi/http";

/**
 * server-only
 */
export async function getPocketbase() {
  const pb = new Pocketbase(process.env.SERVER_API_URL);
  const event = getEvent();
  const authCookies = getCookie(event, "Authorization");

  pb.authStore.loadFromCookie(authCookies || "");
  let isAuthenticated = false;
  try {
    const isAuthStoreValid = pb.authStore.isValid;
    // get an up-to-date auth store state by veryfing and refreshing the loaded auth model (if any)
    isAuthStoreValid && (await pb.collection("users").authRefresh());
    isAuthenticated = isAuthStoreValid;
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear();
    isAuthenticated = false;
  }

  return { pb, isAuthenticated: false, authCookies };
}
