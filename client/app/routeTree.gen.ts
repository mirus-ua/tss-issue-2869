/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthedImport } from "./routes/_authed";
import { Route as IndexImport } from "./routes/index";
import { Route as AuthedDashboardImport } from "./routes/_authed/_dashboard";
import { Route as AuthedDashboardFaqImport } from "./routes/_authed/_dashboard/faq";
import { Route as AuthedDashboardUIdIndexImport } from "./routes/_authed/_dashboard/u/$id.index";

// Create/Update Routes

const AuthedRoute = AuthedImport.update({
  id: "/_authed",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AuthedDashboardRoute = AuthedDashboardImport.update({
  id: "/_dashboard",
  getParentRoute: () => AuthedRoute,
} as any);

const AuthedDashboardFaqRoute = AuthedDashboardFaqImport.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => AuthedDashboardRoute,
} as any);

const AuthedDashboardUIdIndexRoute = AuthedDashboardUIdIndexImport.update({
  id: "/u/$id/",
  path: "/u/$id/",
  getParentRoute: () => AuthedDashboardRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_authed": {
      id: "/_authed";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthedImport;
      parentRoute: typeof rootRoute;
    };
    "/_authed/_dashboard": {
      id: "/_authed/_dashboard";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthedDashboardImport;
      parentRoute: typeof AuthedImport;
    };
    "/_authed/_dashboard/faq": {
      id: "/_authed/_dashboard/faq";
      path: "/faq";
      fullPath: "/faq";
      preLoaderRoute: typeof AuthedDashboardFaqImport;
      parentRoute: typeof AuthedDashboardImport;
    };
    "/_authed/_dashboard/u/$id/": {
      id: "/_authed/_dashboard/u/$id/";
      path: "/u/$id";
      fullPath: "/u/$id";
      preLoaderRoute: typeof AuthedDashboardUIdIndexImport;
      parentRoute: typeof AuthedDashboardImport;
    };
  }
}

// Create and export the route tree

interface AuthedDashboardRouteChildren {
  AuthedDashboardFaqRoute: typeof AuthedDashboardFaqRoute;
  AuthedDashboardUIdIndexRoute: typeof AuthedDashboardUIdIndexRoute;
}

const AuthedDashboardRouteChildren: AuthedDashboardRouteChildren = {
  AuthedDashboardFaqRoute: AuthedDashboardFaqRoute,
  AuthedDashboardUIdIndexRoute: AuthedDashboardUIdIndexRoute,
};

const AuthedDashboardRouteWithChildren = AuthedDashboardRoute._addFileChildren(
  AuthedDashboardRouteChildren
);

interface AuthedRouteChildren {
  AuthedDashboardRoute: typeof AuthedDashboardRouteWithChildren;
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedDashboardRoute: AuthedDashboardRouteWithChildren,
};

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "": typeof AuthedDashboardRouteWithChildren;
  "/faq": typeof AuthedDashboardFaqRoute;
  "/u/$id": typeof AuthedDashboardUIdIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "": typeof AuthedDashboardRouteWithChildren;
  "/faq": typeof AuthedDashboardFaqRoute;
  "/u/$id": typeof AuthedDashboardUIdIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/_authed": typeof AuthedRouteWithChildren;
  "/_authed/_dashboard": typeof AuthedDashboardRouteWithChildren;
  "/_authed/_dashboard/faq": typeof AuthedDashboardFaqRoute;
  "/_authed/_dashboard/u/$id/": typeof AuthedDashboardUIdIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "" | "/faq" | "/u/$id";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "" | "/faq" | "/u/$id";
  id:
    | "__root__"
    | "/"
    | "/_authed"
    | "/_authed/_dashboard"
    | "/_authed/_dashboard/faq"
    | "/_authed/_dashboard/u/$id/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AuthedRoute: typeof AuthedRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authed"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/_dashboard"
      ]
    },
    "/_authed/_dashboard": {
      "filePath": "_authed/_dashboard.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/_dashboard/faq",
        "/_authed/_dashboard/u/$id/"
      ]
    },
    "/_authed/_dashboard/faq": {
      "filePath": "_authed/_dashboard/faq.tsx",
      "parent": "/_authed/_dashboard"
    },
    "/_authed/_dashboard/u/$id/": {
      "filePath": "_authed/_dashboard/u/$id.index.tsx",
      "parent": "/_authed/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
