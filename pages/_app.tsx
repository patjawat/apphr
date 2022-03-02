import type { NextComponentType  } from 'next' //Import Component type
import { SessionProvider, useSession } from 'next-auth/react'
import { AppProps } from 'next/app';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

type CustomAppProps = AppProps & {
  Component: NextComponentType & {auth?: boolean}
}
type Props = {
  children: any;
};


export default function MyApp({ Component, pageProps: pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
          <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

const Auth = ({ children }:Props ) =>{
  const router = useRouter()
  // const { data: session, status, token } = useSession()
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    const getPost = async function () {
      if (status === 'loading')
        return; // Do nothing while loading
      if (!isUser)
        router.push('/api/auth/signin'); //Redirect to login
    }
   
    getPost();
  }, [isUser, status])

  if (isUser) {
    return children
  }
  return <div>Loading...</div>
}