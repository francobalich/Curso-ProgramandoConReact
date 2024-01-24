import { Navigate, Route, Routes } from "react-router-dom"
import { GalleryPage, LoginPage, PageNotFound, RegisterPage } from "../page"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export const AppRouter = () => {
  const { user } = useContext(UserContext)
  //const [routesList, setRoutesList] = useState(<></>)
  // const addRoutes = () => {
  //   if (user.state === 'authenticated')
  //     return (<>
  //       <Route path='/home' element={<GalleryPage />} />
  //       <Route path='/auth/*' element={<Navigate to='/home' />} />
  //     </>)
  //   else {
  //     return (<>
  //       <Route path='/auth/login' element={<LoginPage />} />
  //       <Route path='/auth/register' element={<RegisterPage />} />
  //     </>)
  //   }
  // }
  // useEffect(() => {
  //   setRoutesList(addRoutes())
  // }, [user])

  return (
    <>
      <Routes>
        {
          (user.state === 'authenticated')
            ? <>
              <Route path='/home' element={<GalleryPage />} />
              <Route path='/auth/*' element={<Navigate to='/home' />} />
              <Route path='/*' element={<PageNotFound />} />
            </>
            :
            <>
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/auth/register' element={<RegisterPage />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
        }
        
      </Routes>
    </>
  )
}
