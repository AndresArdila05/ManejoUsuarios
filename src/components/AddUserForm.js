import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './AddUserForm.css';

const AddUserForm = ({ addUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación de campos obligatorios
        if (!firstName || !lastName || !email) {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Validación del formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido');
            return;
        }
        const newUser = {
        id: Date.now(),
            firstName,
            lastName,
            email,
            status: true
        };
        addUser(newUser);
        setFirstName('');
        setLastName('');
        setEmail('');

        alert('Usuario añadido correctamente, lo puedes visualizar al final de la lista de usuarios activos.');
    };

    return (
        <div className='form-container'>
            <center>
            <h2>Agregar usuarios nuevos al sistema</h2>
            <hr className="separator" /> 
            </center>
            <form className='form-a' onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{backgroundColor: 'rgb(241, 241, 241)', borderRadius: '5px', mt:'5px'}}
                    required
                />
                <TextField
                    label="Apellido"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{backgroundColor: 'rgb(241, 241, 241)', borderRadius: '5px', mt:'5px'}}
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{backgroundColor: 'rgb(241, 241, 241)', borderRadius: '5px', mt:'5px'}}
                    required
                />
                <Button        
                    sx={{
                    backgroundColor: 'blue',
                    '&:hover': {
                        backgroundColor: 'darkblue',
                    },
                    padding: '8px 20px',
                    fontSize: '14px',
                    marginTop: '15px'
                    }} 
                    type="submit" 
                    variant="contained" 
                    color="primary">
                        Añadir usuario
                </Button>
                </form>
        </div>
    );
};

export default AddUserForm;
