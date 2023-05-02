import { FC, ReactNode } from 'react'

// @mui
import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'

// Components

interface Props {
  children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Box component='main'>
      Header
      <Box sx={{ minHeight: '80vh' }}>{children}</Box>
      Footer
    </Box>
  )
}

export { AppLayout }
