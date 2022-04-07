import React from 'react'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

const Index = (props: Props) => {
  return (
    <div className="p-3">
      <Navbar />
      <main className="container mx-w-6xl mx-auto py-4">

   {props.children}

      </main>
    </div>

  )
}
export default Index;
