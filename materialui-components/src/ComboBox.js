import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 ,height:100 }}
      renderInput={(params) => {
        console.log(params)
        return(
            <TextField {...params} label="Movie" />
        )
    }}
    />
  );
}