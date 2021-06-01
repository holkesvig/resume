import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <Head>
        <title>Melissa Nelson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeSection}>
            <h1 className={styles.title}>
              Melissa Nelson Home
            </h1>
        </div>
          <div className={styles.coreValuesSection}>
              <h1 className={styles.title}>
                  Melissa Nelson Core Values
              </h1>
          </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
