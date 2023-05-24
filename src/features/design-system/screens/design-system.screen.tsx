import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MuiButton from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Button, Iconify, Link, PageTitle } from '@/components/core'
import DesignSystemComponentContainer from '../components/design-system-component-container'

const DashboardScreen = () => {
  return (
    <Box sx={{ px: 4 }}>
      <PageTitle title='Design System' />
      <DesignSystemComponentContainer title='Button' open={true}>
        <Box sx={{ mb: 2 }}>
          <Typography gutterBottom color='text.secondary'>
            Variant Text
          </Typography>
          <Box sx={{ '& > button': { m: 1 } }}>
            <Button size='small'>Small Button</Button>
            <Button>Medium Button</Button>
            <Button size='large'>Large Button</Button>

            <Button size='small' color='secondary'>
              Small Button
            </Button>
            <Button color='secondary'>Medium Button</Button>
            <Button size='large' color='secondary'>
              Large Button
            </Button>

            <Button size='small' color='success'>
              Small Button
            </Button>
            <Button color='success'>Medium Button</Button>
            <Button size='large' color='success'>
              Large Button
            </Button>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography gutterBottom color='text.secondary'>
            Variant Outlined
          </Typography>
          <Box sx={{ '& > button': { m: 1 } }}>
            <Button size='small' variant='outlined'>
              Small Button
            </Button>
            <Button variant='outlined'>Medium Button</Button>
            <Button size='large' variant='outlined'>
              Large Button
            </Button>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography gutterBottom color='text.secondary'>
            Variant Contained
          </Typography>
          <Box sx={{ '& > button': { m: 1 } }}>
            <Button size='small' variant='contained'>
              Small Button
            </Button>
            <Button variant='contained'>Medium Button</Button>
            <Button size='large' variant='contained'>
              Large Button
            </Button>
            <Button size='small' variant='contained' color='secondary'>
              Small Button
            </Button>
            <Button variant='contained' color='secondary'>
              Medium Button
            </Button>
            <Button size='large' variant='contained' color='secondary'>
              Large Button
            </Button>
            <Button size='small' variant='contained' color='success'>
              Small Button
            </Button>
            <Button variant='contained' color='success'>
              Medium Button
            </Button>
            <Button size='large' variant='contained' color='success'>
              Large Button
            </Button>
            <Button size='small' variant='contained' color='error'>
              Small Button
            </Button>
            <Button variant='contained' color='error'>
              Medium Button
            </Button>
            <Button size='large' variant='contained' color='error'>
              Large Button
            </Button>
            <Button size='small' variant='contained' color='warning'>
              Small Button
            </Button>
            <Button variant='contained' color='warning'>
              Medium Button
            </Button>
            <Button size='large' variant='contained' color='warning'>
              Large Button
            </Button>
          </Box>
        </Box>
      </DesignSystemComponentContainer>
      <Link href='/'>
        <Button startIcon={<Iconify icon='solar:arrow-left-bold-duotone' />} variant='contained'>
          Go to Home
        </Button>
      </Link>
    </Box>
  )
}

export default DashboardScreen
