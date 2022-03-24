import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

function Sidebar({}: Props) {
  return (
      <>
     
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a href="index3.html" className="brand-link">
  <Image src="/static/img/AdminLTELogo.png" alt="AdminLTE Logo"  className="brand-image img-circle elevation-3" width="33" height="33" />
    {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
  <Image src="/static/img/user2-160x160.jpg" alt="User Image"  className="img-circle elevation-2" width="53" height="53"/>
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div><div className="sidebar-search-results"><div className="list-group"><a href="#" className="list-group-item"><div className="search-title"><strong className="text-light" />N<strong className="text-light" />o<strong className="text-light" /> <strong className="text-light" />e<strong className="text-light" />l<strong className="text-light" />e<strong className="text-light" />m<strong className="text-light" />e<strong className="text-light" />n<strong className="text-light" />t<strong className="text-light" /> <strong className="text-light" />f<strong className="text-light" />o<strong className="text-light" />u<strong className="text-light" />n<strong className="text-light" />d<strong className="text-light" />!<strong className="text-light" /></div><div className="search-path" /></a></div></div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Starter Pages
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Active Page</p>
              </a>
            </li>
            <li className="nav-item">
                <Link href="/foods">
              <a className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inactive Page</p>
              </a>
                </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Simple Link
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
<div className="sidebar-custom">
  <a href="#" className="btn btn-link"><i className="bi bi-sliders" /></a>
  <a href="#" className="btn btn-secondary hide-on-collapse pos-right">Help</a>
</div>

</aside>
</>
  )
}

export default Sidebar