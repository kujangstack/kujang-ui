import { Outlet, RouteObject } from 'react-router-dom'
import DesignSystemScreen from '../screens/design-system.screen'

export const designSystemRoutes = (): RouteObject => ({
  path: 'design-system',
  element: <Outlet />,
  children: [
    {
      path: '',
      element: <DesignSystemScreen />,
    },
  ],
})
