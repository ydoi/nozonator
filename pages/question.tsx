import styles from '../styles/Question.module.css'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function QuestionPage() {
  const [question, setQuestion] = useState('')
  const [session, setSession] = useState(null)
  const getQuestion = async () => {
    const query = session ? `?session=${session}` : ''
    const res = await fetch(`http://localhost:3000/api/questions${query}`)
    const json = await res.json()
    setQuestion(json.question)
    // window.localStorage.setItem('session', JSON.stringify(json.session))
    if (typeof window !== "undefined") {
      localStorage.setItem('session', JSON.stringify(json.session))
    }
  }
  useEffect(() => {
    getQuestion()
  }, [])
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
            {question}
            </p>
            <div className={styles.list}>
              <ul>
                <li>
                  <Link href="/question">
                    はい
                  </Link>
                </li>
                <li>
                  <Link href="/question">
                    今の目的とは異なる
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  )
}

// export async function getStaticProps(context: any) {
//   const res = await fetch(`http://localhost:3000/api/questions`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       question: data.question
//     },
//   }
// }

export default QuestionPage