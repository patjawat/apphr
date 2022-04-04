import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

const Index = (props: Props) => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="page-body">
        <div className="container-xl">
          {props.children}
        </div>
      </div>
    </div>

  )
}
export default Index;
