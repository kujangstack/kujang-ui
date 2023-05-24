import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha, SxProps } from '@mui/material'
import { Iconify } from '../iconify'

interface LabelProps {
  text: string
  icon?: string
  color?: string
  sx?: SxProps
  onClick?: () => void
  variant?: 'standard' | 'filled' | 'outlined'
}

const Label: FC<LabelProps> = props => {
  const { text, icon, color, sx, variant, onClick } = props

  const backgroundColor = useMemo(() => {
    if (variant === 'standard') {
      return alpha(String(color), 0.1)
    } else if (variant === 'filled') {
      return color
    } else if (variant === 'outlined') {
      return 'background.paper'
    } else {
      return color
    }
  }, [color, variant])

  const getColor = useMemo(() => {
    if (variant === 'standard' || variant === 'outlined') {
      return color
    } else if (variant === 'filled') {
      return '#fff'
    } else {
      return color
    }
  }, [color, variant])

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        color: getColor,
        borderRadius: 1,
        px: 1,
        py: 0.4,
        cursor: onClick ? 'pointer' : 'unset',
        ...sx,
      }}
    >
      {icon && <Iconify icon={icon} height={16} width={16} />}
      <Typography
        sx={{
          ml: icon ? 0.8 : 0,
          color: 'inherit',
          fontWeight: 600,
          fontSize: '0.85rem',
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

Label.defaultProps = {
  color: '#1955B7',
  variant: 'standard',
}

export { Label }
