import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout/Layout'

import Button from '@material-ui/core/Button'

import Home from '../sections/Home/Home'
import Core from '../sections/Core/Core'
import Skills from '../sections/Skills/Skills'
import Experience from '../sections/Experience/Experience'
import Work from '../sections/Work/Work'

export default function Index() {
  return (
    <div className={styles.index}>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.homeSection} id="home">
              <Home />
          </div>
            <div className={styles.coreValuesSection} id="values">
                <Core />
            </div>
            <div className={styles.skillsSection} id="skills">
                <Skills />
            </div>
            <div className={styles.experienceSection} id="experience">
                <Experience />
            </div>
            <div className={styles.workSection} id="work">
                <Work />
            </div>
            <div className={styles.contact}>
            <Button className={styles.socialButton}><a href="2melissamahan@gmail.com" target="blank"><img src="../assets/icons/gmail.png" alt="Email Icon" className={styles.socialIcon}/></a></Button>
            <Button className={styles.socialButton}><a href="https://linkedin.com/in/holkesvig" target="blank"><img src="../assets/icons/linkedin.png" alt="Linkedin Icon" className={styles.socialIcon}/></a></Button>
            <Button className={styles.socialButton}><a href="https://github.com/holkesvig" target="blank"><img src="../assets/icons/github.png" alt="Github Icon" className={styles.socialIcon}/></a></Button>
            <Button className={styles.socialButton}><a href="https://devpost.com/Mmahan2" target="blank"><img src="../assets/icons/dev.png" alt="Devpost Icon" className={styles.socialIcon}/></a></Button>
            <Button className={styles.socialButton}><a href="https://instagram.com/revivalplantco/" target="blank"><img src="../assets/icons/instagram.png" alt="Devpost Icon" className={styles.socialIcon}/></a></Button>
            </div>
            <div className={styles.footer}><p>2021</p></div>
        </main>
      </Layout>
    </div>
  )
}
