import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout/Layout'

import Home from '../sections/Home/Home'

export default function Index() {
  return (
    <div className={styles.index}>

      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.homeSection} id="home">
              <Home></Home>
          </div>
            <div className={styles.coreValuesSection} id="values">
                <h1 className={styles.title}>
                    Melissa Nelson Core Values
                </h1>
            </div>
            <div className={styles.skillsSection} id="skills">
                <h1 className={styles.title}>
                    Melissa Nelson Skills
                </h1>
            </div>
            <div className={styles.experienceSection} id="experience">
                <h1 className={styles.title}>
                    Melissa Nelson Experience
                </h1>
            </div>
            <div className={styles.workSection} id="work">
                <h1 className={styles.title}>
                    Melissa Nelson Work
                </h1>
            </div>
        </main>
        <footer>
          <div className={styles.footer}></div>
        </footer>
      </Layout>

    </div>
  )
}
