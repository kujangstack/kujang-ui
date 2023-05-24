// router
import { Navigate, Outlet, RouteObject } from 'react-router-dom'

// screens
import FourOFourScreen from '@/features/errors/screens/404.screen'

// routes
import { designSystemRoutes } from '@/features/design-system/routes'
import { dashboardRoutes } from '@/features/dashboard/routes'

// constants
import { APP_ROUTE_PATHS } from '@/features/app/routes'

const rootRoutes = (): Array<RouteObject> => [
  {
    path: '',
    element: <Outlet />,
    children: [{ ...designSystemRoutes() }, { ...dashboardRoutes() }, { path: '*', element: <Navigate to='/404' replace /> }],
  },
  {
    path: '*',
    children: [
      { path: '404', element: <FourOFourScreen /> },
      { path: '*', element: <Navigate to='/404' replace /> },
    ],
  },
  {
    path: '',
    element: <Navigate to={APP_ROUTE_PATHS.App} replace />,
  },
  { path: '*', element: <Navigate to='/404' replace /> },
]

export { rootRoutes }
