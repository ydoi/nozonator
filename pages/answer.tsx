import styles from '../styles/Answer.module.css'
import Image from 'next/image'

function AnswerPage({ answer }: { answer: string }) {
  return (
    (
      <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.background}>
          <Image
            src="/background.png"
            alt=""
            width={900}
            height={700}
          />
        </div>
        <div className={styles.navigator}>
          <Image
            src="/genjumin.png"
            width={430}
            height={600}
          />
          <div>
            <p className={styles['balloon1']}>
            あなたにピッタリのサービスは {answer} です。
            </p>
            <div className={styles.list}>
              <ul>
                <li>はい</li>
                <li>いいえ</li>
                <li>さらに探す</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  )
}

export async function getStaticProps(context: any) {
  const res = await fetch(`http://localhost:3000/api/answers`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      question: data.question
    },
  }
}

export default QuestionPage