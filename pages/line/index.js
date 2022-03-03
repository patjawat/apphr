import React,{useEffect} from 'react'

const liffId = process.env.LINE_CLIENT_ID

export default function index() {
  
    useEffect(async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
    } catch (error) {
      console.error('liff init error', error.message)
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  })
  return (
    <div>index</div>
  )
}
