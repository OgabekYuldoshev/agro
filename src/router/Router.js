// ** React Imports
import { lazy } from 'react'

// ** Custom Components
// import LayoutWrapper from '@layouts/components/layout-wrapper'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

// ** Routes & Default Routes
import { Routes } from './routes'
import DefaultLayout from '@src/layouts/DefaultLayout'

const Router = () => {

  const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'))

  // ** Init Error Component
  const Error = lazy(() => import('@src/views/Error'))

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  // const FinalRoute = props => {
  //   const route = props.route
  //   let action, resource

  //   // ** Assign vars based on route meta
  //   if (route.meta) {
  //     action = route.meta.action ? route.meta.action : null
  //     resource = route.meta.resource ? route.meta.resource : null
  //   }

  //   if (
  //     (!isUserLoggedIn() && route.meta === undefined) ||
  //     (!isUserLoggedIn() && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
  //   ) {
  //     /**
  //      ** If user is not Logged in & route meta is undefined
  //      ** OR
  //      ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
  //      ** Then redirect user to login
  //      */

  //     return <Redirect to='/login' />
  //   } else if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
  //     // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
  //     return <Redirect to='/' />
  //   } else if (isUserLoggedIn() && !ability.can(action || 'read', resource)) {
  //     // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
  //     return <Redirect to='/misc/not-authorized' />
  //   } else {
  //     // ** If none of the above render component
  //     return <route.component {...props} />
  //   }
  // }

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* Not Auth Route */}
        <Route
          exact
          path='/misc/not-authorized'
          render={() => (
            <DefaultLayout>
              <NotAuthorized />
            </DefaultLayout>
          )}
        />
        {Routes?.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact === true}
            render={props => (
              <DefaultLayout>
                <route.component {...props} />
              </DefaultLayout>
            )
            }
          />
        )
        )}
        {/* NotFound Error page */}
        <Route path='*' component={Error} />
      </Switch>
    </AppRouter>
  )
}

export default Router
