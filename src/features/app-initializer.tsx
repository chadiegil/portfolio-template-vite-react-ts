import { useAppDispatch } from "@hooks/useAppDispatch"
import { refreshToken } from "@redux/slices/auth-slice"
import { Suspense, useEffect, useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { guestRoutes } from "@routes/public-route"

const router = createBrowserRouter([
  guestRoutesss,
  // authRoutes,
  // privateRoutes,
  // otherRoutes,
])

export const AppInitializer = () => {
  const appDispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyRefreshToken = async () => {
      await appDispatch(refreshToken())
      setLoading(false)
    }
    void verifyRefreshToken()
  }, [])

  return loading ? null : (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
