import React, { useEffect, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import { Greeting } from '../styles/homeStyle'

const getGreeting = () => {
  const hours = new Date().getHours()
  if (hours < 12) return 'Good morning'
  if (hours < 18) return 'Good afternoon'
  return 'Good evening'
}

export const Profile = () => {
  const { user } = useAuth0()
  const [greeting, setGreeting] = useState<string>(getGreeting())

  useEffect(() => {
    setGreeting(getGreeting()) // Actualiza el saludo en base a la hora
  }, [])

  return (
    <>
      {user ? (
        <Greeting>{`${greeting}, ${user.name}`}</Greeting> // Aplica el estilo
      ) : (
        <Greeting>You Are Not Logged In</Greeting>
      )}
    </>
  )
}
