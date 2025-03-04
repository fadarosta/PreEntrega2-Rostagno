import logo from "../../assets/logo-03.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CartWidget from "../cartWidget/cartWidget"

const NavBar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 20 }} />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 100 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Packs de Clases</a>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <a href="#">Agenda de Clases</a>
                        </Typography>
                        <CartWidget />
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default NavBar