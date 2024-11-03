import React from 'react';
import { Text } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export const Profile = () => {
  const { user } = useAuth0();
  
  console.log("soy usuario", user); // Aquí es donde se registra el usuario

  return (
    <>
      {user ? (
        <Text>Bienvenido, {user.name}</Text>
      ) : (
        <Text>No has iniciado sesión</Text>
      )}
    </>
  );
};