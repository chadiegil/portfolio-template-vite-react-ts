import { Icon } from "@components/ui/icon/icon"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-between font-medium mb-10 items-center">
      <div className="text-lg">
        <span className="p-2 bg-blue-500 text-white rounded-md">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Chad
          </NavLink>
        </span>
        Portfolio
      </div>
      <nav className="flex justify-between gap-7 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : "text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : "text-gray-500"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/stafcks"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : "text-gray-500"
          }
        >
          Stacks
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : "text-gray-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : "text-gray-500"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className="p-2 bg-blue-500 text-white rounded-md flex items-center gap-2 cursor-pointer">
        Sign in
        <Icon icon="Signin" size="extraSmall" />
      </div>
    </div>
  )
}
