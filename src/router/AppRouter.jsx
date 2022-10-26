import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

function AppRouter() {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path='/auth/*' element={<AuthRoutes />}/>

        {/* JournalAPP */}
        <Route path='/*' element={<JournalRoutes />}/>
    </Routes>
  )
}

export default AppRouter