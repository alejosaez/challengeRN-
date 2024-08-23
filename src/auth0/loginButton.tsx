import React from 'react';
import { Button } from 'react-native';
import { useAuth0 } from 'react-native-auth0'

export const LoginButton = () => {
    const {authorize} = useAuth0();

    const onPress = async () => {
        try {
            const result = await authorize();
            console.log("llegue a login: ", result)
        } catch (e) {
            console.log(e);
        }
    };

    return <Button onPress={onPress} title="Log in" />
}