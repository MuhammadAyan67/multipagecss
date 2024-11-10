'use client'

import Image from "next/image";

import Link from "next/link";
import contact from "@/app/contact/page"
import about from "@/app/about/page"

export default function Home() {
  return (<div>
   <div className="container">
    <h2>
      Milestone 2 
    </h2>
    <div className="pages">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>contact</Link>
    </div>
   </div>
   <div className="home">
    <h1>
      This is a Home Page 
    </h1>
   </div>
   </div>

  );
}
