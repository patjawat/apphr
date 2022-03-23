import React from 'react'
import Header from './header'

type Props = {
children:React.ReactNode
}

const Index = (props: Props) => {
  return (
    <>
    <Header />
   <div className="content mt-5">
              <div className="container p-3">
                  {props.children}
              </div>
          </div>
    </>
  )
}
export default Index;
