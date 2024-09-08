import React, { useEffect } from 'react';
import { Button, Alert, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export const LoginButton: React.FC = () => {
  // Verifica la disponibilidad de Google Play Services al iniciar el componente
  useEffect(() => {
    console.log('Ejecutando useEffect para verificar servicios de Google Play...');
    checkPlayServices();
  }, []);

  // Función para verificar los Servicios de Google Play
  const checkPlayServices = async () => {
    try {
      console.log('Verificando la disponibilidad de Google Play Services...');
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      console.log('Google Play Services está disponible y actualizado.');
    } catch (error) {
      console.error('Error al verificar Google Play Services:', error);
      Alert.alert(
        'Error',
        'Los Servicios de Google Play no están disponibles o necesitan ser actualizados.'
      );
    }
  };

  // Función para manejar el inicio de sesión con Google
  const signInWithGoogle = async () => {
    try {
      console.log('Intentando iniciar sesión con Google...');

      // Verifica que el dispositivo tenga los servicios de Google Play
      await GoogleSignin.hasPlayServices();
      console.log('Google Play Services está disponible.');

      // Verifica si el usuario ya está autenticado
      const currentUser = await GoogleSignin.getCurrentUser();
      console.log('Usuario actual:', currentUser);

      if (currentUser) {
        Alert.alert('Ya estás autenticado', 'Ya has iniciado sesión con Google.');
        return;
      }

      // Inicia sesión con Google y obtiene la información del usuario
      const userInfo = await GoogleSignin.signIn();
      console.log('Información del usuario obtenida:', userInfo);

      // Accede al nombre del usuario desde el objeto userInfo
      const userName = userInfo?.data?.user?.name || 'Usuario'; // Asegúrate de que `userInfo` tenga esta propiedad
      console.log('Nombre del usuario:', userName);
      
      Alert.alert('Inicio de sesión exitoso', `Bienvenido ${userName}`);
    } catch (error: any) {
      console.error('Error al iniciar sesión con Google:', error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Inicio de sesión cancelado por el usuario.');
        Alert.alert('Cancelado', 'El inicio de sesión fue cancelado.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Inicio de sesión en curso.');
        Alert.alert('En progreso', 'Ya hay un inicio de sesión en curso.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Servicios de Google Play no disponibles.');
        Alert.alert('Error', 'Los servicios de Google Play no están disponibles.');
      } else {
        console.error('Error desconocido al iniciar sesión con Google:', error);
        Alert.alert('Error', 'No se pudo iniciar sesión con Google');
      }
    }
  };

  // Función para manejar el cierre de sesión con Google
  const signOutWithGoogle = async () => {
    try {
      console.log('Intentando cerrar sesión con Google...');
      const currentUser = await GoogleSignin.getCurrentUser();
      console.log('Usuario actual antes de cerrar sesión:', currentUser);

      if (currentUser) {
        await GoogleSignin.revokeAccess(); // Revoca el acceso y elimina los tokens de Google
        console.log('Acceso revocado.');
        await GoogleSignin.signOut(); // Cierra sesión de la cuenta de Google
        console.log('Sesión de Google cerrada.');
        Alert.alert('Cierre de sesión', 'Has cerrado sesión exitosamente.');
      } else {
        console.log('No hay ninguna sesión activa para cerrar.');
        Alert.alert('No autenticado', 'No hay ninguna sesión activa para cerrar.');
      }
    } catch (error) {
      console.error('Error al cerrar sesión con Google:', error);
      Alert.alert('Error', 'No se pudo cerrar sesión con Google');
    }
  };

  return (
    <View>
      {/* Botón para iniciar sesión con Google */}
      <Button title="Iniciar sesión con Google" onPress={signInWithGoogle} />
      {/* Botón para cerrar sesión con Google */}
      <Button title="Cerrar sesión con Google" onPress={signOutWithGoogle} />
    </View>
  );
};

export default LoginButton;
