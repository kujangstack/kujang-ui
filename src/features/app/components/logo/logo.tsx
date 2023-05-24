import { FC } from 'react'
import Box from '@mui/material/Box'
import { LogoImg, DevelopmentLogoImg, LogoWithTextImg, LogoDevelopmentWithTextImg } from '@/assets'
import { SxProps } from '@mui/material'

const EnvMode = process.env.ENV_MODE

interface Props {
  sx?: SxProps
  withText?: boolean
}

export const Logo: FC<Props> = props => {
  return (
    <Box
      sx={{ width: 46, height: 'auto', ...props.sx }}
      component='img'
      src={
        props.withText
          ? EnvMode === 'dev'
            ? LogoDevelopmentWithTextImg
            : LogoWithTextImg
          : EnvMode === 'dev'
          ? DevelopmentLogoImg
          : LogoImg
      }
      alt='Logo'
    />
  )
}
