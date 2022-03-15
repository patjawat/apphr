import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from "./header.module.css"
import Link from 'next/link';


type Props = {}

function HeaderTop({}: Props) {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
   <header className="p-3 bg-dark text-white">
  <div className="container-fluid">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Link href="/">
      <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
      </a>
      </Link>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <Link href="/">
      <li><a className="nav-link px-2 text-secondary">Home</a></li>
      </Link>
      <Link href="/protected">
      <li><a className="nav-link px-2 text-secondary">protected</a></li>
      </Link>
      <Link href="/me">
      <li><a className="nav-link px-2 text-secondary">Me</a></li>
      </Link>

        {/* <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
      </form>
      <div className="text-end">
      {!session && (
            <>
        <button type="button" className="btn btn-outline-light me-2" onClick={() => signIn()}>Login</button>
        </>
   )}
   {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
        <button type="button" className="btn btn-outline-danger me-2 ml-3" onClick={() =>  signOut()}>Logout</button>
            </>
          )}
      </div>
    </div>
  </div>
</header>

  )
}

export default HeaderTop