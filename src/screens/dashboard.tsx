import React, { FC } from 'react'
import { Greeting } from '@/components/greeting'

const DashboardScreen: FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: ' Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
      }}
    >
      <Greeting name='Kujang UI 👋' />
    </div>
  )
}

export default DashboardScreen
