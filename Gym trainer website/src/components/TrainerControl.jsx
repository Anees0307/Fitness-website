import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import './TrainerControl.css';
import ProgressChart from './ProgressChart';

const trainers = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', specialty: 'Yoga', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Robert Lee', email: 'robert.lee@example.com', specialty: 'Strength Training', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Emily Clark', email: 'emily.clark@example.com', specialty: 'Cardio', avatar: 'https://via.placeholder.com/40' },
];

function TrainerControl() {
  return (
    <div className="trainer-control">
      <h2 className="trainer-control-title">Trainer Control</h2>
      <TableContainer component={Paper} className="trainer-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainers.map((trainer) => (
              <TableRow key={trainer.id}>
                <TableCell>
                  <Avatar src={trainer.avatar} alt={trainer.name} />
                </TableCell>
                <TableCell>{trainer.name}</TableCell>
                <TableCell>{trainer.email}</TableCell>
                <TableCell>{trainer.specialty}</TableCell>
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

export default TrainerControl;
