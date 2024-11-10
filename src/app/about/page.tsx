import Link from 'next/link'
import React from 'react'
import Home from '../page'

const about = () => {
  return (<div>
    <div className="container">
    <h2>
      Milestone 2 
    </h2>
    <div className="pages">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/contact"}>contact</Link>
    </div>
   </div>
    <div className="home">
    <h1>
      This is a About Page 
    </h1>
   </div>
 </div>
  )
}

export default about