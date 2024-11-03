// import React from 'react';
// import { Button } from 'react-native';
// import { useAuth0 } from 'react-native-auth0'

// export const LoginButton = () => {
//     const {authorize} = useAuth0();

//     const onPress = async () => {
//         try {
//             const result = await authorize();
//             console.log("llegue a login: ", result)
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     return <Button onPress={onPress} title="Log in" />
// }

import React from 'react';
import { Button } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Iniciar sesión" />;
};

export const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Cerrar sesión" />;
};