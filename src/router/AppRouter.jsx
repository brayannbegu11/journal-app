import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { useCheckAuth } from '../hooks'
import JournalRoutes from '../journal/routes/JournalRoutes'
import { login, logout } from '../store/auth'
import { CheckingAuth } from '../ui/components/CheckingAuth'

function AppRouter() {

  const {status} = useCheckAuth()
  

  if (status === 'checking'){
    return <CheckingAuth />
  }
  return (
    <Routes>
      {
        status === 'authenticated'
        ? <Route path='/*' element={<JournalRoutes />}/>
        : <Route path='/auth/*' element={<AuthRoutes />}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
        {/* Login y Registro */}
        {/* <Route path='/auth/*' element={<AuthRoutes />}/> */}

        {/* JournalAPP */}
        {/* <Route path='/*' element={<JournalRoutes />}/> */}
    </Routes>
  )
}

export default AppRouter