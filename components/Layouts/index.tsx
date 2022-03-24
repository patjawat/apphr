import React from 'react'
import Header from './header'
import Layout from './adminlte'

type Props = {
children:React.ReactNode
}

const Index = (props: Props) => {
  return (
    <>
    {/* <Header /> */}
   <Layout>
                  {props.children}
          </Layout>
    </>
  )
}
export default Index;
