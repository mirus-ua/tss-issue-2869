import { useRouterState } from "@tanstack/react-router";

export function useBreadcrumbs() {
  const matches = useRouterState({ select: (s) => s.matches });

  return matches
    .filter((match) => {
      return match.meta?.find((itm) => itm?.title);
    })
    .map(({ pathname, meta }) => {
      return {
        title: meta?.find((itm) => itm?.title)?.title,
        path: pathname,
      };
    })
    .filter((itm) => itm.path !== "/");
}
