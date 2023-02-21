// Mui theme provider
import { MuiThemeProvider } from '@/features/theme/components'

// Mui
import Box from '@mui/material/Box'

import { motion } from 'framer-motion'
import { Greeting } from './components/greeting'

const App = () => {
  return (
    <MuiThemeProvider>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{
            duration: 1,
            delay: 1,
            times: [0, 0.2]
          }}
        >
          <Greeting name='Kujang UI' />
        </motion.div>
      </Box>
    </MuiThemeProvider>
  )
}

export default App
