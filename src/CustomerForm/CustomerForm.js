
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
export const CustomerForm = (props) => {
 const setValue=props.setValue;
    const userdata =props.userdata;
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
          <h1 alignItems="center" justify="center"> Add A New Customer</h1>
         <div>
         <Grid xs={8}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" name="firstName" onChange={setValue} value={userdata.firstName} />
         </Grid>
         <Grid xs={8}>
                   <TextField id="outlined-basic" label="Last Name" variant="outlined"  name="lastName" onChange={setValue} value={userdata.lastName}/>
                  </Grid>
          <Grid xs={8}>
           <TextField id="outlined-basic" label="Address" variant="outlined" name="address" onChange={setValue} value={userdata.address}/>
          </Grid>
          <Grid xs={8}>
                     <TextField id="outlined-basic" label="Contact" variant="outlined"  name="contact" onChange={setValue} value={userdata.contact}/>
          </Grid>


           <Grid xs={8}>
                     <TextField
                               id="outlined-select-currency"
                               select
                               label="City"
                               defaultValue="EUR"
                               helperText="Please select Customer City"
                             >

                             </TextField>
           </Grid>
            <Grid xs={8}>
            <Button variant="outlined" type="submit" >Create Customer</Button>
            </Grid>


         </div>
        </Stack>

        }
    </div>);
}
export default CustomerForm;