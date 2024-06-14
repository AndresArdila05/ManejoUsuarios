import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    <strong>MANEJO DE USUARIOS</strong>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
