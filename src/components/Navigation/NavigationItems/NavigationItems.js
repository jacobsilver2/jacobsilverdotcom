//! Dependency Imports
import React from 'react';
//! CSS Imports
import classes from './NavigationItems.css';
//! Component Imports
import NavigationItem from './NavigationItem/NavigationItem';

//!receives isAuthenticated via props.  Receives from Header and Sidedrawer

//!depending on truthiness of isAuthenticated, either the LOGIN or LOGOUT route will render


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">JACOB SILVER</NavigationItem>        
        {/* only show the orders link if User is authenticated */}
        { props.isAuthenticated ? <NavigationItem link="/addShow">Add Show</NavigationItem> : null } 
        {/* //if user is NOT authenticated, then show LOGIN, otherwise show LOGOUT */}
        { !props.isAuthenticated 
        ? <NavigationItem link="/auth">LOGIN</NavigationItem> 
        : <NavigationItem link="/logout">LOGOUT</NavigationItem> 
        }  
        <NavigationItem link="/coding">CODE</NavigationItem> 
        <NavigationItem link="/music">MUSIC</NavigationItem> 
        <NavigationItem link="/booking">BOOKING</NavigationItem> 
        <NavigationItem link="/blog">BLOG</NavigationItem> 
        <NavigationItem link="/newpost">NEW BLOG POST</NavigationItem> 
        <NavigationItem link="/addshow">ADD SHOW</NavigationItem> 
    </ul>
)

export default navigationItems;