
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

export const AdminForm = (props) => {
    const setValue=props.setValue;
    const userdata =props.userdata;
    const errors=props.errors;

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
          <h1 alignItems="center" justify="center"> Add A New Admin</h1>
         <div>
         <Grid xs={8}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" name="firstName" onChange={setValue} value={userdata.firstName} helperText={errors.firstName} error={errors.firstName !== ''}/>
         </Grid>
         <Grid xs={8}>
                   <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastName" onChange={setValue} value={userdata.lastName} helperText={errors.lastName} error={errors.lastName !== ''}/>
                  </Grid>
          <Grid xs={8}>
           <TextField id="outlined-basic" label="Address" variant="outlined"  name="address" onChange={setValue} value={userdata.address} helperText={errors.address} error={errors.address !== ''}/>
          </Grid>
          <Grid xs={8}>
                     <TextField id="outlined-basic" label="Contact" variant="outlined" name="contact" onChange={setValue} value={userdata.contact} helperText={errors.contact} error={errors.contact !== ''} />
          </Grid>




         </div>
        </Stack>


        }
    </div>);
}
export default AdminForm;