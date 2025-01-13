import React from 'react'
import Navbar from '../Navbar'
import Search from '../../../pages/blog/components/Search'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <Search />
    {children}
    </>
  )
}

export default Layout