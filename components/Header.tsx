import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

type Props = {}

export default function Header({}: Props) {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();
  return (
 <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">AM Dashbroad</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <button className="btn btn-primary px-3"  onClick={() => signOut()}>ออกจากระบบ</button>
    </div>
  </div>
</header>

  )
}