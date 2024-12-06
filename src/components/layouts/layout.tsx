import Narbar from "@components/shared/navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <Narbar />
      <Outlet />
    </div>
  )
}
