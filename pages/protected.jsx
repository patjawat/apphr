import { useSession } from "next-auth/react"
import Layout from "../components/layouts"

export default function Admin() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  })

  if (status === 'loading') {
    return <>Loading or not authenticated...</>
  }

  return <Layout>User is logged in</Layout>
}