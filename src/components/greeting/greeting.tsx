import { FC } from 'react'

import Typography from '@mui/material/Typography'

interface Props {
  name: string
}

const Greeting: FC<Props> = ({ name }) => {
  return <Typography variant='h5'>Hello {name}</Typography>
}

export { Greeting }
