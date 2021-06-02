import styles from './Home.module.scss'
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.leftContent}>
        <img className={styles.portrait} 
        src="/images/self-portrait.png" alt="A cartoonized self-portrait of Melissa Nelson using a Macbook"></img>
      </div>
      <div className={styles.rightContent}><h1>Hi, I'm Melissa.</h1>
      <p>I'm a front-end software engineer who is deeply passionate about user experience and product design. 
         My purpose is to bridge the gap between elegance and performance in enterprise and consumer web applications 
         while creating a digital society that is reliable, accessible, and equitable for all.</p>
        <p>Let's build teams that employ a user-first approach to engineering.</p>
      </div>
    </div>
  )
}
