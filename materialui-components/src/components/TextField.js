import { Stack, TextField } from '@mui/material'
import React from 'react'

const TextField1 = () => {
  return (
    <>

      
        <Stack direction={"row"} spacing={2} marginTop={3} >
            <TextField label="user name" placeholder='Enter user name' color='secondary' />
            <TextField label="password" type='password' placeholder='Enter password'  color='secondary' />
        </Stack>

        <Stack direction={"row"} spacing={2} marginTop={2} >
            <TextField variant='filled' label="user name" placeholder='Enter user name' color='secondary' />
            <TextField variant="filled" label="password" type='password' placeholder='Enter password'  color='secondary' />
        </Stack>

        <Stack direction={"row"} spacing={2} marginTop={2} >
            <TextField variant='standard' label="user name" placeholder='Enter user name' color='secondary' />
            <TextField variant='standard' label="password" type='password' placeholder='Enter password'  color='secondary' />
        </Stack>
        
    </>
  )
}

export default TextField1
