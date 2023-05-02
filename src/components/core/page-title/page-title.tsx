import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
}
const PageTitle: FC<Props> = ({ title }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant='h2' sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  )
}

export { PageTitle }
