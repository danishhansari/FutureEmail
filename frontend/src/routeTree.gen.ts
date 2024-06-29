/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthorizedImport } from './routes/_authorized'
import { Route as IndexImport } from './routes/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AuthorizedAboutImport } from './routes/_authorized/about'

// Create/Update Routes

const AuthorizedRoute = AuthorizedImport.update({
  id: '/_authorized',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AuthorizedAboutRoute = AuthorizedAboutImport.update({
  path: '/about',
  getParentRoute: () => AuthorizedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authorized': {
      id: '/_authorized'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthorizedImport
      parentRoute: typeof rootRoute
    }
    '/_authorized/about': {
      id: '/_authorized/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AuthorizedAboutImport
      parentRoute: typeof AuthorizedImport
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthorizedRoute: AuthorizedRoute.addChildren({ AuthorizedAboutRoute }),
  AuthIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authorized",
        "/auth/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authorized": {
      "filePath": "_authorized.tsx",
      "children": [
        "/_authorized/about"
      ]
    },
    "/_authorized/about": {
      "filePath": "_authorized/about.tsx",
      "parent": "/_authorized"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
