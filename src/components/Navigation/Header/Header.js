import React from 'react';
import classes from './Header.css'
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

//sending props.isAuthenticated down to NavigationItems. Received from isAuth


const header = (props) => (
    <header className={classes.Header}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default header;