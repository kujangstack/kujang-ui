import React, { FC } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import MuiLink, { LinkProps } from '@mui/material/Link'

interface Props extends Omit<LinkProps, 'href'> {
  href: string
}

const Link: FC<Props> = (props): JSX.Element => {
  const { href, ...rest } = props
  return <MuiLink component={RouterLink} to={href} {...rest} />
}

export { Link }
