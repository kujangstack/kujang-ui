import { __DEV__ } from '@/features/app/constants'

export const APP_ROUTE_PATHS = {
  ...(__DEV__ && {
    DesignSystem: '/design-system',
  }),
  Dashboard: '/dashboard',
}
