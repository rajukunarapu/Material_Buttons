import React from "react";
import ComboBox from "./ComboBox";
import TextField from '@mui/material/TextField';
import { Button ,Typography} from '@mui/material'


function App() {
  return (
    <div>
      <h1>Movie Selector</h1>
      <ComboBox />
      <Button variant="contained" color="primary" >Click</Button>
      <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      <Typography variant="h1" >h1 heading</Typography>
      <Typography variant="h2" >h2 heading</Typography>
      <Typography variant="h3" >h3 heading</Typography>
      <Typography variant="h4"  component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5" >h5 heading</Typography>
      <Typography variant="h6" >h6 heading</Typography>
      <Typography variant="subtitle1" >subtitle1</Typography>
      <Typography variant="subtitle2" >subtitle2</Typography>
      <Typography variant="body1" >body1</Typography>
      <Typography variant="body2">body2</Typography>





    </div>
  );
}

export default App;
