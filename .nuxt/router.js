import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e024316 = () => interopDefault(import('../pages/bookings/index.vue' /* webpackChunkName: "pages/bookings/index" */))
const _13cd5af5 = () => interopDefault(import('../pages/desks/index.vue' /* webpackChunkName: "pages/desks/index" */))
const _be29d44c = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _e15912b8 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _c7ac2e38 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _18a89a9e = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _25ce3b73 = () => interopDefault(import('../pages/rooms/index.vue' /* webpackChunkName: "pages/rooms/index" */))
const _df9ccafa = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _f8c7554e = () => interopDefault(import('../pages/rooms/_roomId/index.vue' /* webpackChunkName: "pages/rooms/_roomId/index" */))
const _552b6178 = () => interopDefault(import('../pages/rooms/_roomId/desks/index.vue' /* webpackChunkName: "pages/rooms/_roomId/desks/index" */))
const _efc17bb6 = () => interopDefault(import('../pages/rooms/_roomId/desks/_deskId.vue' /* webpackChunkName: "pages/rooms/_roomId/desks/_deskId" */))
const _5d5a39ca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/DeskRentApp/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bookings",
    component: _1e024316,
    name: "bookings"
  }, {
    path: "/desks",
    component: _13cd5af5,
    name: "desks"
  }, {
    path: "/home",
    component: _be29d44c,
    name: "home"
  }, {
    path: "/login",
    component: _e15912b8,
    name: "login"
  }, {
    path: "/profile",
    component: _c7ac2e38,
    name: "profile"
  }, {
    path: "/register",
    component: _18a89a9e,
    name: "register"
  }, {
    path: "/rooms",
    component: _25ce3b73,
    name: "rooms"
  }, {
    path: "/users",
    component: _df9ccafa,
    name: "users"
  }, {
    path: "/rooms/:roomId",
    component: _f8c7554e,
    name: "rooms-roomId"
  }, {
    path: "/rooms/:roomId/desks",
    component: _552b6178,
    name: "rooms-roomId-desks"
  }, {
    path: "/rooms/:roomId/desks/:deskId",
    component: _efc17bb6,
    name: "rooms-roomId-desks-deskId"
  }, {
    path: "/",
    component: _5d5a39ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
