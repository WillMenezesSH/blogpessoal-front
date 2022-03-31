import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense">
                <Link to='/login' className='text-decorator-none'>
                    <Box className='cursor'>
                       <Typography variant="h5" color="inherit">
                            <img src="https://i.imgur.com/m6DlxiN.png" alt="" width="40px" height="40px" padding-top="100"/>
                        </Typography> 
                    </Box>
                    </Link>
                    <Link to='/login' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Shinolog |
                            </Typography>
                        </Box>
                        </Link>

                    
                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home |
                            </Typography>
                        </Box>
                        </Link>
                        
                        
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema |
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'> 
                                <Typography variant="h6" color="inherit">
                                    Logout 
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;