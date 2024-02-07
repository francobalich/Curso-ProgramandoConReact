import { Navigate, Route, Routes } from "react-router-dom"
import { GalleryPage, LoginPage, PageNotFound, RegisterPage } from "../page"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export const AppRouter = () => {
  const { user,setUser } = useContext(UserContext)
  useEffect(() => {
    const readUser=JSON.parse(localStorage.getItem('user'))
    if(readUser!=undefined){
      setUser(readUser)
    }
  }, [])

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
