import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Typography } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const CheckBoxes1 = () => {

    const [skillls,setSkills]  = useState([])
    console.log({skillls})
    const handleChange = (e)=>{
        setSkills([...skillls,e.target.value])
    }
    

  return (
    <>
        <Box marginTop={2} > 
            <Box>
                <Typography variant='body2' >Accept terms and condtion</Typography>
                <Checkbox/>
            </Box>

            <Box>
                <FormControlLabel   label="Accept terms and conditons"  control={<Checkbox />} />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon/>}
                    checkedIcon={<BookmarkIcon/>}
                />
            </Box>

            <Box>
                <FormControl checked={skillls}  onChange={handleChange} >
                    <FormLabel>Select your skills</FormLabel>
                    <FormControlLabel label="HTML" value={"Html"} control={<Checkbox/>} />
                    <FormControlLabel label="CSS" value={"Css"} control={<Checkbox/>} />
                    <FormControlLabel label="JavaScript" value={"JavaScript"} control={<Checkbox/>} />
                </FormControl>
            </Box>

        </Box>
    </>
  )
}

export default CheckBoxes1