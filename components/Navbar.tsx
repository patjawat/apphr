
import {
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = {}

// function Navbar({}: Props) {
//   return (
//     <div>Navbar</div>
//   )
// }

const Navbar  = ({}: Props) =>{
  const { data: session, status } = useSession();

  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NextApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <li className="nav-item">
              {/* <a className="nav-link disabled">{session.user.name}</a> */}
            </li>
          <button className="btn btn-outline-danger" onClick={() => {
          signOut({ redirect: false })
        }}> <FontAwesomeIcon
        icon={faPowerOff}
      />{' '}ออกจากระบบ</button>
        </div>
      </div>
    </nav>
    </>
      )
}

export default Navbar