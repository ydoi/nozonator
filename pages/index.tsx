import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

function HomePage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem('session')
  }
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
          こんにちは。私はピロネーターです。
          </p>
          <Image
            src="/genshijin.png"
            width={300}
            height={300}
          />
          <p className={styles['balloon2']}>
        　今気になっていることを教えてください。あなたに最適なサービスをご案内します。
          </p>
        </div>
        <div className={styles.link}>
          <Link href="/question?first=true">START</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage