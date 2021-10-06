import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/tree.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    return ( 
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="name of your shop" height='25px' className={classes.image} />
                        TREE
                    </Typography>
                    <div className={classes.grow} /> {/* to take as much space as needed */}
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>  {/* the number of content that we have */}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;