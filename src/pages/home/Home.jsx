import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
export default function Home() {
  return (
    <div>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">This is a Typography component</Typography>
      <Typography variant="p">This is a Typography component</Typography>
    </div>
  )
}
