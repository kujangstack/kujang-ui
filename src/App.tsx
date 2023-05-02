// Mui theme provider
import { MuiThemeProvider } from '@/features/theme/components'

// Mui
import Box from '@mui/material/Box'

import { useRoutes } from 'react-router-dom'
import { rootRoutes } from './features/app/routes'

const App = () => {
  const appRoutes = useRoutes(rootRoutes())
  return <MuiThemeProvider>{appRoutes}</MuiThemeProvider>
}

export default App
