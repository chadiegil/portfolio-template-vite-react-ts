// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"

import Card from "@components/shared/card"
import Hero from "@components/shared/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
