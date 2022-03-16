import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID

export default function Me() {
  const [profile, setProfile] = useState()

  // useEffect(async () => {
  //   const liff = (await import('@line/liff')).default
  //       try {
  //     await liff.init({ liffId });
  //     await setProfile(profile)
  //   } catch (error) {
  //     console.error('liff init error', error.message)
  //   }
  //   if (!liff.isLoggedIn()) {
  //     liff.login();
  //   }

  //   await liff.ready
  //   const profile = await liff.getProfile()
  //   setProfile(profile)
  // }, [profile.userId])

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.init({ liffId });
    const profile = await liff.getProfile()
    setProfile(profile)
    console.log(profile)
    // try {

    // } catch (error) {
    //   console.error('liff init error', error.message)
    // }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }, [])
  if(!profile){
    return <>Loadin</>
  }

  return (
    <section>
      {JSON.stringify(profile)}
    <Head>
      <title>My Profile</title>
    </Head>
    <h1>Profile</h1>
    <div>
      {profile.pictureUrl && <Image
        src={profile.pictureUrl}
        alt={profile.displayName}
        width={500}
        height={500}
      />}
      <div>Name: {profile.displayName}</div>
    </div>
  </section>
  )
}