import Stack from '@mui/material/Stack'
import { Greeting } from '@/components/greeting'
import { Button, Iconify, Link } from '@/components/core'
import { APP_ROUTE_PATHS } from '@/features/app/routes'

const DashboardScreen = () => {
  return (
    <Stack spacing={2} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Greeting name='🙂' />
      <Link href={APP_ROUTE_PATHS.DesignSystem as string}>
        <Button endIcon={<Iconify icon='solar:arrow-right-bold-duotone' />} variant='contained'>
          Go to Design System
        </Button>
      </Link>
    </Stack>
  )
}

export default DashboardScreen
