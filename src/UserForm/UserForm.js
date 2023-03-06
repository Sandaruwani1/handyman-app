import {react,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useForm } from 'react-hook-form'

import{AdminForm} from '../AdminForm/AdminForm';
import {CustomerForm} from '../CustomerForm/CustomerForm';
import {HandymanForm} from '../HandymanForm/HandymanForm';
export const UserForm = () => {

const [value,setValue] = useState("");
const handleChange=(e)=>{
console.log(e.target.value)
       setValue( e.target.value);
    }

    return (<div>


    {

     <Stack
          component="form"
            sx={{
                    '& .MuiTextField-root': { m: 2, width: '35ch' },
                  }}
          noValidate
          autoComplete="off"
          spacing={2} alignItems="center" justify="center"
        >
          <h1 alignItems="center" justify="center"> Add A New User</h1>
         <div>
         <Grid xs={8}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
         </Grid>
          <Grid xs={8}>
           <TextField id="outlined-basic" label="User Email" variant="outlined" />
          </Grid>

          <Grid xs={8}>
           <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
           </Grid>
           <Grid xs={8}>
               <FormControl>
                               <FormLabel id="demo-radio-buttons-group-label">User Type</FormLabel>
                               <RadioGroup
                                 aria-labelledby="demo-radio-buttons-group-label"
                                 defaultValue="female"
                                 name="radio-buttons-group"
                               >
                                 <FormControlLabel value="Admin" control={<Radio />} label="Admin" onChange={handleChange} />
                                 <FormControlLabel value="Handyman" control={<Radio />} label="Handyman" onChange={handleChange}/>
                                 <FormControlLabel value="Customer" control={<Radio />} label="Customer" onChange={handleChange} />
                               </RadioGroup>

               </FormControl>



           </Grid>



           <Grid xs={8}>
            {
                       value ==="Admin" ? <AdminForm/> : value==="Customer"? <CustomerForm/> : value==="Handyman"? <HandymanForm/>: ""
                       }
           </Grid>

            <Grid xs={8}>
            <Button variant="outlined">Create User</Button>
            </Grid>


         </div>
        </Stack>

        }
    </div>);
}
export default UserForm;