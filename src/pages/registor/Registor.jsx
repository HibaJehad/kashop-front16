import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function Registor() {


  const { register, handleSubmit} = useForm();

  const Registor = async (data) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
      console.log(response);

    }catch(error){
      console.log(error);
    }
  }

  return (
    <Box component="section" className="registorPage">
      <Typography component="h1" variant="h2">
        Register
      </Typography>

      <Box component="form" onSubmit={handleSubmit(Registor)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>

        <TextField fullWidth label="userName" {...register('userName')} variant="outlined" />
        <TextField fullWidth label="fullName" {...register('fullName')} variant="outlined" />
        <TextField fullWidth label="Email" {...register('email')} variant="outlined" />
        <TextField fullWidth label="Password" {...register('password')} variant="outlined" />
        <TextField fullWidth label="phoneNumber" {...register('phoneNumber')} variant="outlined" />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </Box>
  )
}
