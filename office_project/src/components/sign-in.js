import React, { useState } from "react";
import { Container, Paper ,Avatar,Typography , Box , TextField , FormControlLabel , Checkbox , Button , Grid , Link , InputAdornment} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
const SignIn = () => {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  // const [Visibility,setVisibility] = useState(false)

    const handleSubmit = ()=>{console.log("value submitted")}

  return (
    <Container maxWidth={"xs"} >
      <Paper  elevation={10} sx={{marginTop:14,padding:2, borderRadius:4}}>
        <Avatar
         sx={{mx:"auto", mb:1 , backgroundColor:"secondary.main" , textAlign:"center"}}>
            <LockOutlinedIcon/>
        </Avatar>

        <Typography 
        variant="h5" 
        component={"h1"} 
        sx={{textAlign:"center",fontWeight:"bold"}}  
        >Sign in page</Typography>

        <Box component={"form"} sx={{mt:2}} noValidate onSubmit={handleSubmit}  >

            <TextField  
            name="username"
            color="secondary" 
            id="username" 
            label="User name"
            placeholder="Enter username"  
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}
            required 
            autoFocus
            size="medium"
            fullWidth sx={{mb:2}} />

            <TextField  
            name="password" 
            id="password" 
            label="Password"
            color="secondary"
            placeholder="Enter password"
            InputProps={{
              endAdornment :<InputAdornment position="end" val sx={{'&:hover':{cursor:"pointer"}}} ><VisibilityOffIcon/></InputAdornment>,
            }}
            value={password}  
            onChange={(e)=>setPassword(e.target.value)}
            required 
            fullWidth  
            type="password" 
            size="medium"
            sx={{mb:2}} />

            <FormControlLabel  
            control={<Checkbox color="primary"  value={"remember"} />} label="Remember me" 
            />

            <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{mt:1 ,fontWeight:"bold"}} 
            >Sign In</Button>

            <Grid container justifyContent={"space-between"} sx={{mt:2}} >
                <Link 
                href="/forget-password" 
                sx={{textDecoration:"none",'&:hover':{textDecoration:"underline",'&:hover':{textDecoration:"underline"}}}}
                >ForgetPassword?</Link>

                <Link 
                href="sign-in" 
                sx={{textDecoration:"none",'&:hover':{textDecoration:"underline",'&:hover':{textDecoration:"underline"}}}}
                >Sign in</Link>
            </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
