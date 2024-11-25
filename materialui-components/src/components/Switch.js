import React, {  useEffect,useState } from 'react'
import { Box,Switch,FormControlLabel } from '@mui/material'

const Switch1 = () => {
    const [checked,setChecked] = useState(false)
    console.log({checked})
    const handleChange = (e)=>{
        setChecked(e.target.checked)
    }

    useEffect(()=>{
        document.body.style.backgroundColor = checked ? "black" : "white"
        document.body.style.color = checked ? "white" : "black"

        return ()=>{
            document.body.backgroundColor = ""
            document.body.Color = ""
        }
    },[checked])

  return (
    <Box >
        <FormControlLabel label="Dark mode" control={<Switch color='secondary' checked={checked} onChange={handleChange} />} />
    </Box>
  )
}

export default Switch1