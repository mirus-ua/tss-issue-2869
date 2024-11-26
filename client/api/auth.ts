import { redirect } from "@tanstack/react-router";
import { createMiddleware, createServerFn } from "@tanstack/start";
import Pocketbase from "pocketbase";
import { deleteCookie, getEvent } from "vinxi/http";
import { getPocketbase } from "./pb.server";

export type UserProfile = {
  avatar: "" | string;
  email: string;
  id: string;
  name: string;
  verified: boolean;
};

export const isAuthMiddleware = createMiddleware().server(async ({ next }) => {
  const { pb, isAuthenticated } = await getPocketbase();
  return next({
    context: {
      isAuthenticated,
      userProfile:
        isAuthenticated && pb.authStore.model
          ? (structuredClone({
              avatar: pb.authStore.model.avatar,
              email: pb.authStore.model.email,
              id: pb.authStore.model.id,
              name: pb.authStore.model.name,
              verified: pb.authStore.model.verified,
            }) as UserProfile)
          : ({} as UserProfile),
    },
  });
});

export const getAuthentication = createServerFn()
  .middleware([isAuthMiddleware])
  .handler(async ({ context }) => {
    return context;
  });

export const logout = createServerFn().handler(async () => {
  const pb = new Pocketbase(process.env.SERVER_API_URL);
  const event = getEvent();
  deleteCookie(event, "Authorization");
  pb.authStore.clear();
  throw redirect({ to: "/auth/login", replace: true });
});
