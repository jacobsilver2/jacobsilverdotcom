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
        <NavigationItem link="/coding">CODE</NavigationItem> 
        <NavigationItem link="/music">MUSIC</NavigationItem> 
        <NavigationItem link="/booking">BOOKING</NavigationItem> 
        <NavigationItem link="/blog">BLOG</NavigationItem>       

        {/* only show the add show link if User is authenticated */}
        { props.isAuthenticated 
        ? <NavigationItem link="music/addShow">ADD SHOW</NavigationItem> 
        : null 
        } 

        { props.isAuthenticated
        ? <NavigationItem link="/blog/newpost">NEW BLOG POST</NavigationItem>
        : null
        }
        
        {/* //if user is NOT authenticated, then show LOGIN, otherwise show LOGOUT */}
        { props.isAuthenticated 
        ? <NavigationItem link="/logout">LOGOUT</NavigationItem>
        : null
        }  
    </ul>
)

export default navigationItems;