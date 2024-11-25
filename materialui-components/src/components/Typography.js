import React from 'react'
import {Typography}  from '@mui/material'

const Typography1 = () => {
  return (
    <>
    
      <Typography variant="h1" color='primary' >h1 heading</Typography>
      <Typography variant="h2" color='secondary' >h2 heading</Typography>
      <Typography variant="h3" color='error' >h3 heading</Typography>
      <Typography variant="h4" color='info' component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5" color='success' >h5 heading</Typography>
      <Typography variant="h6" color='warning' >h6 heading</Typography>
      <Typography variant="subtitle1" color='secondary' >subtitle1</Typography>
      <Typography variant="subtitle2" color='primary' >subtitle2</Typography>
      <Typography variant="body1" color='secondary' >body1</Typography>
      <Typography variant="body2" color='primary' >body2</Typography>
    
      
    </>

  )
}

export default Typography1
