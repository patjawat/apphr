
import Layout from "../../components/Layouts"
import styles from "./header.module.css"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function MePage() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Layout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
    </Layout>
  )
}
MePage.auth = true;