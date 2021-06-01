import Head from 'next/head'
import styles from './home.module.scss'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className={styles.index}>

      <Layout>
        <Head>
          <title>Melissa Nelson</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

          <div className={styles.homeSection} id="home">
              <h1 className={styles.title}>
                  Melissa Nelson Home
              </h1>
          </div>
            <div className={styles.coreValuesSection} id="values">
                <h1 className={styles.title}>
                    Melissa Nelson Core Values
                </h1>
            </div>
            <div className={styles.experienceSection} id="experience">
                <h1 className={styles.title}>
                    Melissa Nelson Experience
                </h1>
            </div>
            <div className={styles.downloadSection} id="download">
                <h1 className={styles.title}>
                    Melissa Nelson Download
                </h1>
            </div>
        </main>

        <footer>
        </footer>
      </Layout>

    </div>
  )
}
