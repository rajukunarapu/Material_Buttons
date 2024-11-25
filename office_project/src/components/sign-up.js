import React, { useState } from "react";
import { Container, Paper ,Avatar,Typography , Box , TextField , Button , MenuItem, Link, Grid} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUp = () => {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [employId,setEmployId]  = useState('')
  const [manager,setManager]  = useState('')

    const handleSubmit = ()=>{console.log("value submitted")}

  return (
    <Container maxWidth={"xs"} >
      <Paper  elevation={8} sx={{marginTop:14,padding:2,borderRadius:4}}>
        <Avatar
         sx={{mx:"auto", mb:1 , backgroundColor:"secondary.main" , textAlign:"center"}}>
            <LockOutlinedIcon/>
        </Avatar>

        <Typography 
        variant="h5" 
        component={"h1"} 
        sx={{textAlign:"center",fontWeight:"bold"}}  
        >Sign up page</Typography>

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
            fullWidth sx={{mb:2}} />

            <TextField  
            name="password" 
            id="password" 
            label="Password"
            color="secondary"
            placeholder="Enter password"
            value={password}  
            onChange={(e)=>setPassword(e.target.value)}
            required 
            fullWidth  
            type="password" 
            sx={{mb:2}} />

            <TextField  
            name="confirmPassword" 
            id="confirmPassword" 
            label="Confirm Password"
            color="secondary"
            placeholder="Enter password"
            value={confirmPassword}  
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required 
            fullWidth  
            type="password" 
            sx={{mb:2}} />

            <TextField  
            name="employId" 
            id="employId" 
            label="Employ Id"
            color="secondary"
            placeholder="Enter employ id"
            value={employId}  
            onChange={(e)=>setEmployId(e.target.value)}
            required 
            fullWidth  
            type="password" 
            sx={{mb:2}} />

            <TextField 
            label="Manager Name"
            color="secondary"
            select
            fullWidth
            value={manager}
            onChange={(e)=>setManager(e.target.value)}

            >
                <MenuItem value="-1" ></MenuItem>
                <MenuItem value="manager1" >Manager1</MenuItem>
                <MenuItem value="manager2" >Manager2</MenuItem>
                <MenuItem value="manager3" >Manager3</MenuItem>
                <MenuItem value="manager4" >Manager4</MenuItem>
                
            </TextField>


            <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{mt:2,fontWeight:"bold"}} 
            >Sign Up</Button>

            <Grid container justifyContent={"center"} >
                <Link
                color="primary"
                href="/"
                sx={{mt:2,textDecoration:"none",'&:hover':{textDecoration:"underline"},fontSize:19}}
                >Already have an account?</Link>

            </Grid>
            
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
