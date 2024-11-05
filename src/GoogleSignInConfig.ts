import { GoogleSignin } from '@react-native-google-signin/google-signin'

// Configuración de Google Sign-In
GoogleSignin.configure({
  webClientId:
    '648491833455-1iq2kv4m6sqfcbc2454tmfcgbbme8rl3.apps.googleusercontent.com', // Asegúrate de que este sea tu ID de cliente web de OAuth 2.0 correcto
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  scopes: ['profile', 'email'],
})
