import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const UserList = () => {
    // CORS - CROSS ORIGIN
    const[users,setUsers]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/users").then(response =>{
            setUsers(response.data)
        })

    },[]);

    return(
    <div>
        <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User Id</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">User Email</TableCell>
                    <TableCell align="right">User Status</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow
                      key={user.userId}>
                      <TableCell component="th" scope="row">
                        {user.userId}
                      </TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.userEmail}</TableCell>
                      <TableCell align="right">{user.isActive? 'Active': 'Deactive'}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    </div>
    );

}
export default UserList;