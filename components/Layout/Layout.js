import React from 'react'
import styles from './Layout.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import { Button } from '@material-ui/core'
import NavDrawer from '../../components/Drawer/Drawer.js'


export default function Layout({ children }) {
    return <div className={styles.container}>
            <Head>
                <title>Melissa Nelson</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <nav className={styles.navbar}>
                <div className={styles.navigation}>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="/">About</Link></Button>
                        <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="/">Download</Link></Button>
                    <div className={styles.mobile}>
                        <NavDrawer/>
                    </div>
                </div>
            </nav>
        <div className={styles.mainContent}>{children}</div>
    </div>
}