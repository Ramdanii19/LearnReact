import React from 'react'
import { useLogin } from '../hooks/useLogin'

export const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>profile</div>
  )
}
