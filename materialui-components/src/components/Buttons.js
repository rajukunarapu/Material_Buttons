import { Button, IconButton, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React from 'react'

const Buttons = () => {
  return (
    <>
        <Stack spacing={2} direction={"row"} marginTop={3} >
            <Button variant='text' color='secondary' >Text</Button>
            <Button variant='contained' color='secondary' >contained</Button>
            <Button variant='outlined' color='secondary' >Outlined</Button>
        </Stack>

        
        <Stack spacing={2} direction={"row"} marginBlock={2} >
            <Button variant='text' color='secondary' startIcon={<SendIcon/>} >Text</Button>
            <Button variant='contained' color='secondary' endIcon={<ShoppingCartIcon/>} >contained</Button>
            <Button variant='outlined' color='secondary' startIcon={<CloudUploadIcon/>} >Outlined</Button>
        </Stack>

        <Stack spacing={2} direction={"row"} marginBlock={2} >
            <IconButton color='primary' ><SendIcon/></IconButton>
            <IconButton color='secondary' ><ShoppingCartIcon/></IconButton>
            <IconButton color='success' ><CloudUploadIcon/></IconButton>
        </Stack>
        
        
    </>
    
  )
}

export default Buttons