import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material'
import React from 'react'

const RadioButton1 = () => {
  return (
    <>
        <FormControl sx={{marginTop:3}} >
            <FormLabel id='performance-label'  >Rating your performance
            </FormLabel  >
                <RadioGroup name='performance-label' aria-labelledby='performance-label' >
                    <FormControlLabel value={"Poor"} label="Poor" control={<Radio/>} />
                    <FormControlLabel value={"Better"} label="Better" control={<Radio />} />
                    <FormControlLabel value={"Great"} label="Great" control={<Radio/>} />
                    <FormControlLabel value={"Excellent"} label="Excellent" control={<Radio/>} />
                </RadioGroup>
        </FormControl>
    </>
  )
}

export default RadioButton1