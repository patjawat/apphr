import { useSession } from "next-auth/react"
import Layout from "../components/Layouts"
export default function AdminDashboard() {
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return(
      <Layout>
        AdminDashboard
      </Layout>
    )
  }
  
  AdminDashboard.auth = true