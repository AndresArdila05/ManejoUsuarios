import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import './UserTable.css';

const UserTable = ({ users, deleteUser, editUser }) => {
    const [editMode, setEditMode] = useState(null);
    const [editedFields, setEditedFields] = useState({});

    const handleEdit = (user) => {
        setEditMode(user.id);
        setEditedFields({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    };

    const handleSave = (userId) => {
        const updatedUser = {
            id: userId,
            firstName: editedFields.firstName,
            lastName: editedFields.lastName,
            email: editedFields.email
        };
        editUser(updatedUser);
        setEditMode(null);
    };

    const handleChange = (field, value) => {
        setEditedFields({ ...editedFields, [field]: value });
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Nombre</strong></TableCell>
                        <TableCell><strong>Apellido</strong></TableCell>
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell><strong>Acciones</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>
                                {editMode === user.id ? (
                                    <TextField
                                        value={editedFields.firstName}
                                        onChange={(e) => handleChange('firstName', e.target.value)}
                                    />
                                ) : (
                                    user.firstName
                                )}
                            </TableCell>
                            <TableCell>
                                {editMode === user.id ? (
                                    <TextField
                                        value={editedFields.lastName}
                                        onChange={(e) => handleChange('lastName', e.target.value)}
                                    />
                                ) : (
                                    user.lastName
                                )}
                            </TableCell>
                            <TableCell>
                                {editMode === user.id ? (
                                    <TextField
                                        value={editedFields.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                ) : (
                                    user.email
                                )}
                            </TableCell>
                            <TableCell>
                                {editMode === user.id ? (
                                    <span className='eliminar2'><Button variant="contained" color="primary" onClick={() => handleSave(user.id)}>Guardar</Button></span>
                                ) : (
                                    <span className='eliminar2'><Button variant="contained" color="primary" onClick={() => handleEdit(user)}>Editar</Button></span>
                                )}
                                <Button variant="contained" color="secondary" onClick={() => {
                                    if (window.confirm(`Estás seguro de eliminar el usuario ${user.firstName} ${user.lastName}?`)) {
                                        deleteUser(user.id);
                                    }
                                }}>Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
