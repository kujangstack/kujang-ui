import { FC, LazyExoticComponent, Suspense } from 'react'

// components
import { LoadingFullScreen } from '@/components/core/loading-fullscreen'

// eslint-disable-next-line react/display-name
const LoadableSuspense = (Component: LazyExoticComponent<FC>) => (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingFullScreen />}>
      <Component />
    </Suspense>
  )
}

export { LoadableSuspense }
