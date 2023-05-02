import { FC, ReactNode, useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { Iconify } from '@/components/core'

interface Props {
  title: string
  open?: boolean
  children: ReactNode
}

const DesignSystemComponentContainer: FC<Props> = ({ title, open, children }) => {
  const [expanded, setExpanded] = useState(open)

  const onToggleExpand = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  return (
    <Box sx={{ borderWidth: 1, borderRadius: 1, borderCollapse: 'divider', px: 3, py: 1.4, backgroundColor: 'background.paper', mb: 2 }}>
      <Stack
        onClick={onToggleExpand}
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
        sx={{ cursor: 'pointer' }}
      >
        <Typography component='h3' variant='h6' sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <IconButton onClick={onToggleExpand}>
          <Iconify icon={expanded ? 'ic:sharp-keyboard-arrow-down' : 'ic:sharp-keyboard-arrow-up'} />
        </IconButton>
      </Stack>
      {/* {expanded && <Divider sx={{ width: '100%', my: 2 }} />} */}
      <Collapse in={expanded}>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  )
}

DesignSystemComponentContainer.defaultProps = {
  open: false,
}

export default DesignSystemComponentContainer
