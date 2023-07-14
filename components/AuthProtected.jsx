'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react'
const AuthProtected = ({children}) => {
   
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProtected;