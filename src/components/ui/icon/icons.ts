import { lazy } from "react"

export const icons = {
  Signin: lazy(async () => await import("./icons/sign-in")),
}
