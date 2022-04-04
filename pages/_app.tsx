import type { NextComponentType  } from 'next' //Import Component type
import { SessionProvider, useSession } from 'next-auth/react'
import NextNProgress from "nextjs-progressbar";
import { AppProps } from 'next/app';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-flags.min.css'
import '@tabler/core/dist/css/tabler-payments.min.css'
import '@tabler/core/dist/css/tabler-vendors.css'
import '@tabler/core/dist/css/demo.min.css'
const liffId = process.env.NEXT_PUBLIC_LIFF_ID

type CustomAppProps = AppProps & {
  Component: NextComponentType & {auth?: boolean}
}
type Props = {
  children: any;
};


export default function MyApp({ Component, pageProps: pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
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
        return;
    }
   
    // getPost();
  }, [isUser, status])

  return children;

  if (isUser) {
    return children
  }
  return <div>Loading...</div>
}