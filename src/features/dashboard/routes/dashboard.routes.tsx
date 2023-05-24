import { Outlet, RouteObject } from 'react-router-dom'

// screens
import DashboardScreen from '@/features/dashboard/screens/dashboard.screen'

export const dashboardRoutes = (): RouteObject => ({
  path: '',
  element: <Outlet />,
  children: [
    {
      path: '',
      element: <DashboardScreen />,
    },
  ],
})
