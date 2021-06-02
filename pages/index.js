import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout/Layout'

import Home from '../sections/Home/Home'
import Core from '../sections/Core/Core'
import Experience from '../sections/Experience/Experience'

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
                <h1 className={styles.title}>
                    Melissa Nelson Skills
                </h1>
            </div>
            <div className={styles.experienceSection} id="experience">
                <Experience />
            </div>
            <div className={styles.workSection} id="work">
                <h1 className={styles.title}>
                    Melissa Nelson Work
                </h1>
            </div>
            <div className={styles.footer}><p>2021</p></div>
        </main>

      </Layout>
    </div>
  )
}
