import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

 const NavBar = () =>{
     return(
         <div>
             <AppBar position="static">
                 <ToolBar>
                     <Menu/>
                     <IconButton edge="start" color="inherit" aria-label="menu">
                     <Typography variant="title" color="inherit" align="center">
                         Car Parts Catalog
                     </Typography>
                     </IconButton>
                 </ToolBar>
             </AppBar>
         </div>

     )
 }

 export default NavBar; 