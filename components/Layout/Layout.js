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
                <div className={styles.navHeader}>Melissa Nelson</div>                
                <div className={styles.navigation}>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="#home" replace>Hello</Link></Button>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="#values" replace>Values</Link></Button>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="#skills" replace>Skills</Link></Button>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="#experience" replace>Experience</Link></Button>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><Link href="#work" replace>Work</Link></Button>
                    <Button className={`${styles.navItem} ${styles.desktop}`}><a href="/assets/melissa-nelson-resume.pdf" download>Resume PDF</a></Button>
                    <div className={styles.mobile}>
                        <NavDrawer/>
                    </div>
                </div>
            </nav>
        <div className={styles.mainContent}>{children}</div>
    </div>
}