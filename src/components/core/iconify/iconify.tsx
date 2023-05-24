import React, { FC } from 'react'

// icons
import { Icon, IconProps } from '@iconify/react'

// @mui
import { SxProps } from '@mui/material/styles'

interface IconifyProps extends IconProps {
  sx?: SxProps
}

export const Iconify: FC<IconifyProps> = props => {
  const { icon, sx, ...rest } = props
  return <Icon icon={icon} {...rest} />
}
