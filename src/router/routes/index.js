import { lazy } from 'react'

// ** Merge Routes
const Routes = [
  {
    path: '/',
    component: lazy(() => import('../../views/main')),
    exact: true
  },
  {
    path: '/category/:id',
    component: lazy(() => import('../../views/category')),
    exact: true
  },
  {
    path: '/wishlist',
    component: lazy(() => import('../../views/wishlist')),
    exact: true
  },
  {
    path: '/page/:id',
    component: lazy(() => import('../../views/page')),
    exact: true
  },
  {
    path: '/profile',
    component: lazy(() => import('../../views/profile')),
    exact: true
  },
  {
    path: '/contacts',
    component: lazy(() => import('../../views/contacts')),
    exact: true
  },
  {
    path: '/partners',
    component: lazy(() => import('../../views/partners')),
    exact: true
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/checkout')),
    exact: true
  },
  {
    path: '/media',
    component: lazy(() => import('../../views/media')),
    exact: true
  },
  {
    path: '/media/:id',
    component: lazy(() => import('../../views/media/View')),
    exact: true
  },
  {
    path: '/product/:id',
    component: lazy(() => import('../../views/product')),
    exact: true
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error'))
  }
]

export { Routes }
