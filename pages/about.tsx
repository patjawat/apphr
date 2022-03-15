import { useSession } from "next-auth/react"
export default function About() {
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return "About"
  }
  
  About.auth = true;