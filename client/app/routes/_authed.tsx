import { createFileRoute } from "@tanstack/react-router";
import { getAuthentication } from "@/api/auth";

export const Route = createFileRoute("/_authed")({
  beforeLoad: async ({ context }) => {
    const { isAuthenticated, userProfile } = await getAuthentication();
    // * comment our the logic for simplification
    // if (!isAuthenticated) {
    //   throw new Error("Not authenticated");
    // }
    return {
      ...context,
      userProfile,
    };
  },
});
