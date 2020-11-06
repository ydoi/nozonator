import styles from '../styles/Home.module.css'
import Image from 'next/image'

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}>
        <a href="/">HOME</a>
      </div> */}
      <div className={styles.main}>
        <div className={styles.background}>
          <Image
            src="/background.png"
            alt=""
            width={900}
            height={700}
          />
        </div>
        <p className={styles.title}>Pironator</p>
        <div className={styles.navigator}>
          <p className={styles['balloon1']}>
          こんにちは。ピロネーターです。
          </p>
          <Image
            src="/genshijin.png"
            width={300}
            height={300}
          />
          <p className={styles['balloon2']}>
        　気になることをおしえてください。良さそうなサービスをお探しします。
          </p>
        </div>
        <a href="/question" className={styles.link}>START</a>
      </div>
    </div>
  )
}

export default HomePage