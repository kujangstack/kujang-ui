import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Button, Iconify } from '@/components/core'
import { useNavigate } from 'react-router-dom'

const FourOFourScreen = () => {
  const navigate = useNavigate()

  const onClickGoHome = (): void => {
    navigate('/')
  }
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h2'>Awww..</Typography>
      <Typography gutterBottom sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
        {/* eslint-disable-next-line react/no-unescaped-entities  */}
        don't cry! it's a just a 404 error!
      </Typography>

      <Button startIcon={<Iconify icon='solar:arrow-left-bold-duotone' height={20} width={20} />} onClick={onClickGoHome}>
        Go to Homepage
      </Button>
    </Stack>
  )
}

export default FourOFourScreen
