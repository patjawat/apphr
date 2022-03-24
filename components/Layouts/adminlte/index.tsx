import React from 'react'
import './adminlte.module.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'
import ControlSidebar from './controlSidebar'
import Content from './Content'
import Footer from './Footer'
type Props = {
  children: React.ReactNode
}

export default function index(props: Props) {
  return (
      <div >
        <Navbar />
        <Sidebar />
        <ControlSidebar />
        <Content>
          {props.children}
        </Content>
        <Footer />
      </div>
  )
}