import {react,useState, useEffect, useRef} from 'react';
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

const [role,setRole] = useState("");
const handleChange=(e)=>{
console.log(e.target.value)
       setRole( e.target.value);
    }



const [userdata,setUserdata] =useState({
 userName:'',
 userEmail:'',
 password:'',
 firstName:'',
 lastName:'',
 address:'',
 contact:''

});

const [errors, setErrors] = useState({
    userName: '',
    userEmail: '',
    password:'',
     firstName:'',
     lastName:'',
     address:'',
     contact:''


  });

const setValue=(e) => {
const name= e.target.name;
const value= e.target.value;

    // functional form to use previous state
    setUserdata(prev => ({...prev, [name]:value}));

    setErrors(prev => ({
        ...prev,
        [name]: ''
    }))

};



  const validate = () => {
    const errorMsgs = {};
    let error = false;

    // Validate name
   if (!userdata.userName) {
        error = true;
      errorMsgs.userName = 'Name is required';
    }

    // Validate email
    if (!userdata.userEmail) {
    error = true;
      errorMsgs.userEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userdata.userEmail)) {
      errorMsgs.userEmail = 'Email is invalid';
    }

    // Validate password
    if (!userdata.password) {
    error = true;
      errorMsgs.password = 'Password is required';
    } else if (userdata.password.length < 8) {
      errorMsgs.password = 'Password must be at least 8 characters';
    }

    // Validate first name
     if (!userdata.firstName) {
            error = true;
          errorMsgs.firstName = 'First Name is required';
        }
    // Validate last name
     if (!userdata.lastName) {
            error = true;
          errorMsgs.lastName = 'Last Name is required';
        }

     // Validate name
     if (!userdata.address) {
            error = true;
           errorMsgs.address = 'Address is required';
         }

     // Validate name
     if (!userdata.contact) {
            error = true;
             errorMsgs.contact = 'Contact Number is required';
             }
    setErrors(errorMsgs);
    return error;
  };


const handleSubmit = (e) => {
  e.preventDefault();

  // Perform validation

 const validationErrors = validate(userdata);
  if (validate.error) {

  } else {
    // Submit form data to the server
    console.log(userdata);
    const finalRoleData = () => {
        setUserdata({
          ...userdata,
          role: "Admin",
          adminFirstname:userdata.firstName,
          adminLastname:userdata.lastName,
          adminAddress:userdata.address,
          adminContact:userdata.contact
        });
      };

    return (role==="Admin" ? const finalRoleData = () => {
                                     setUserdata({
                                       ...userdata,
                                       role: "Admin",
                                       adminFirstname:userdata.firstName,
                                       adminLastname:userdata.lastName,
                                       adminAddress:userdata.address,
                                       adminContact:userdata.contact
                                     });
                                   };


     : role==="Customer"? finalRoleData = {
                                }
                               const finalRoleData = () => {
                                       setUserdata({
                                         ...userdata,
                                         role:'Customer',
                                         customerFirstname:userdata.firstName,
                                         customerLastname:userdata.lastName,
                                         customerAddress:userdata.address,
                                         customerContact:userdata.contact
                                       });
                                     };
      : role==="Handyman"? finalRoleData= {
                                role:'Handyman',
                                handymanFirstname:[userdata.firstName],
                                handymanLastname:[userdata.lastName],
                                handymanAddress:[userdata.address],
                                handymanContact:[userdata.contact]
                                }

                                )


    userAccData= {
        userName:[userdata.userName],
        userEmail:[userdata.userEmail],
        password:[userdata.password]
    }

    cont finalUserdata =[ finalRoleData, userAccData]

//    axios.post('/api/users', finalUserdata)
//          .then(response => {
//           console.log(response.data);
//          })
//          .catch(error => {
//            console.log(error);
//         });
  }
};



    return (<div>


    {
    <form >
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
          <TextField id="outlined-basic" label="Username" variant="outlined" name="userName" value={userdata.userName} onChange={setValue} helperText={errors.userName} error={errors.userName !== ''}/>
         </Grid>
          <Grid xs={8}>
           <TextField id="outlined-basic" label="User Email" variant="outlined" name="userEmail" value={userdata.userEmail} onChange={setValue} helperText={errors.userEmail} error={errors.userEmail !== ''} />
          </Grid>

          <Grid xs={8}>
           <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" value={userdata.password} onChange={setValue} name="password" helperText={errors.password} error={errors.password !== ''}/>
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
                       role ==="Admin" ? <AdminForm setValue={setValue} userdata ={userdata}  errors={errors}/> : role==="Customer"? <CustomerForm setValue={setValue} userdata ={userdata}/> : role==="Handyman"? <HandymanForm setValue={setValue} userdata ={userdata}/>: ""
                       }
           </Grid>

            <Grid xs={8}>
                       <Button variant="outlined" type="submit" onClick={handleSubmit} >Create Admin</Button>
            </Grid>





         </div>
        </Stack>
        </form>

        }
    </div>);
}
export default UserForm;