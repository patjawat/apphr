import React,{useEffect} from 'react'

type Props = {}

const  Index = ({}: Props)  => {

    useEffect( () => {
        const getAuth = async () => 
        {

            const liff = (await import('@line/liff')).default
           
                if (!liff.isLoggedIn()) {
                  liff.login();
                }
        }
        getAuth();
      })

  return (
    <div>index</div>
  )
}

export default Index;