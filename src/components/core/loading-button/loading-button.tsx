import { FC } from 'react'
import MuiButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'

type Props = LoadingButtonProps

export const StyledLoadingButton = styled(MuiButton)({
  textTransform: 'unset',
  fontWeight: 500,
  whiteSpace: 'pre-wrap',

  // small
  '&.MuiButton-sizeSmall': {
    padding: '4px 14px',
  },

  '&.MuiButton-sizeMedium': {
    padding: '6px 14px',
  },

  '&.MuiButton-sizeLarge': {
    padding: '8px 26px',
  },
})

const LoadingButton: FC<Props> = props => {
  return <StyledLoadingButton {...props} />
}

export { LoadingButton }
