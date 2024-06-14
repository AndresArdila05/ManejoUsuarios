import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            sx={{
                width: '100%',
                position: 'static',
                bottom: 0,
                left: 0,
                mt: 0,
                py: 2,
                textAlign: 'center',
                backgroundColor: '#1976D2',
                color: 'white',
            }}
            >
            <Typography variant="body1">
                2024 | Creado por: <a href='https://github.com/AndresArdila05'><strong>Andrés Camilo Ardila Diaz</strong></a>
            </Typography>
        </Box>
    );
};

export default Footer;
