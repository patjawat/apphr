import React from 'react'
import Link from 'next/link';

type Props = {}

function header({}: Props) {
  return (
   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">ระบบติดตาม</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="/dashboard">
          <a className="nav-link active" aria-current="page">Dashboard</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/posts">
          <a className="nav-link active" aria-current="page">Post</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/foods">
          <a className="nav-link active" aria-current="page">Foods</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default header