import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Link from 'next/link'


import styles from './Drawer.module.scss'


export default function NavDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={styles.navDrawer}
        >
            <Link href='/'>
                <List>
                    <ListItem className={styles.navItem} button key='Home'>
                        <ListItemText primary='Home' />
                    </ListItem>
                </List>
            </Link>
            <Link href='/about'>
                <List>
                    <ListItem className={styles.navItem} button key='Guides'>
                        <ListItemText primary='Guides' />
                    </ListItem>
                </List>
            </Link>
            <Link href='/travel'>
                <List>
                    <ListItem className={styles.navItem} button key='Blog'>
                        <ListItemText primary='Blog' />
                    </ListItem>
                </List>
            </Link>
            <Link href='/registry'>
                <List>
                    <ListItem className={styles.navItem} button key='Shop'>
                        <ListItemText primary='Shop' />
                    </ListItem>
                </List>
            </Link>
            <Link href='/faq'>
                <List>
                    <ListItem className={styles.navItem} button key='FAQ'>
                        <ListItemText primary='FAQ' />
                    </ListItem>
                </List>
            </Link>

        </div>
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton className={styles.navIcon} onClick={toggleDrawer(anchor, true)}><MenuIcon/></IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
