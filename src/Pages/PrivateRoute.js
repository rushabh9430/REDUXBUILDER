import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if(!user || !user?.email){
        return <Navigate to='/' />
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute