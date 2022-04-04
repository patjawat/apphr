import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";
import Layout from "../components/Layouts"

type Props = {}

export default function Index(props: Props) {

  return (
    <Layout>
      <div className="page-header d-print-none">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <div className="page-pretitle">
              Overview
            </div>
            <h2 className="page-title">
              Dashboard
            </h2>
          </div>
          {/* Page title actions */}
          <div className="col-12 col-md-auto ms-auto d-print-none">
            <div className="btn-list">
              <span className="d-none d-sm-inline">
                <a href="#" className="btn btn-white">
                  New view
                </a>
              </span>
              <a href="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                Create new report
              </a>
              <a href="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link href="/api/auth/signin">
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign In
        </button>
      </Link>
      <Link href="/api/auth/signout">
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </Link>
    </Layout>
  )
}

Index.auth = true

