import React from 'react';
import { Button } from 'react-native';
import Auth0, {useAuth0} from 'react-native-auth0'

export const LoginButton = () => {
    // const auth0Config={ domain:'dev-6e3abqr4giz5d0ed.us.auth0.com', clientId:'EUGRaLAm9elOPiPwxgo1eB8OVMuUeiOZ'}
    // const auth0= new Auth0(auth0Config)
    const {authorize, clearSession, user, error, isLoading} = useAuth0();


    const onPress = async () => {
        try {
          const result=  await authorize()
            // const result = await auth0.webAuth.authorize({scope:"openid profile email",audience:"https://reactnative-challenge.com"}) ;
            //  await auth0.webAuth.clearSession ;<

            console.log("llegue a login: ", user,error)
            console.log("llegue a login: ", result)

        } catch (e) {
            console.log(e);
        }
    };

    return <Button onPress={onPress} title="Log in" />
}


// webAuth me mandan a la web para autorizarme 
// scope se refiere a los permisos que tiene el codigo para el usuario, es un string (openid profile email)