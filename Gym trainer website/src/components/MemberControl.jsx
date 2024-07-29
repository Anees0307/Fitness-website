import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import './MemberControl.css';  // Ensure this path is correct relative to your component


const members = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', membership: 'Gold', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', membership: 'Silver', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', membership: 'Bronze', avatar: 'https://via.placeholder.com/40' },
];

function MemberControl() {
  return (
    <div className="member-control" style={{backgroundColor:'black'}}>
      <TableContainer component={Paper} className="member-table" >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Membership</TableCell>
              <TableCell>Actions</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Avatar src={member.avatar} alt={member.name} />
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.membership}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" className="action-button">Edit</Button>
                  <Button variant="contained" color="secondary" className="action-button">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MemberControl;
