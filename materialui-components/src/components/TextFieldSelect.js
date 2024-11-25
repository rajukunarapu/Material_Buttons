import { MenuItem, TextField } from '@mui/material'
import React from 'react'

const TextFieldSelect1 = () => {
  return (
    <>
      
          <TextField label="select item"  color='secondary' size='small' select fullWidth sx={{maxWidth:250,marginTop:3}} >
            <MenuItem>Item1</MenuItem>
            <MenuItem>Item2</MenuItem>
            <MenuItem>Item3</MenuItem>
          </TextField>
    
    </>
    
  )
}

export default TextFieldSelect1