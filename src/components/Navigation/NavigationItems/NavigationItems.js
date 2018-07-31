//! Dependency Imports
import React from 'react';
//! CSS Imports
import classes from './NavigationItems.css';
//! Component Imports
import NavigationItem from './NavigationItem/NavigationItem';

//!receives isAuthenticated via props.  Receives from Toolbar and Sidedrawer

//!depending on truthiness of isAuthenticated, either the LOGIN or LOGOUT routewill render


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Jacob Silver</NavigationItem>        
        {/* only show the orders link if User is authenticated */}
        { props.isAuthenticated ? <NavigationItem link="/addShow">Add Show</NavigationItem> : null } 
        {/* //if user is NOT authenticated, then show LOGIN, otherwise show LOGOUT */}
        { !props.isAuthenticated 
        ? <NavigationItem link="/auth">LOGIN</NavigationItem> 
        : <NavigationItem link="/logout">LOGOUT</NavigationItem> 
        }  
        <NavigationItem link="/music">MUSIC</NavigationItem> 
        <NavigationItem link="/code">CODE</NavigationItem> 
        <NavigationItem link="/booking">BOOKING</NavigationItem> 
    </ul>
)

export default navigationItems;