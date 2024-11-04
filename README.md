# ChallengeRNFront

Este es el proyecto de frontend para el desafío de crear una aplicación móvil que replique un diseño proporcionado de manera pixel-perfect utilizando **React Native** con **TypeScript**. La aplicación permite la creación y gestión de productos, autenticación de usuarios y visualización de categorías mediante una API de backend.

## Descripción del Desafío

El objetivo es desarrollar una aplicación que siga fielmente el diseño establecido, creando una interfaz completa y funcional. Para ello, se implementará un formulario de creación de productos, así como un flujo de autenticación. El formulario de creación de productos se puede acceder presionando el botón de "alerta", mientras que la autenticación se accede al presionar el botón de usuario.

- [Figma](https://www.figma.com/design/wyEuQ8vu7rkx4kIfm5h9Zn/Coffee-Mobile-App-UI-Template-(Community)?node-id=0-1&t=fFryQwtdgeBl0kwf-0)

## Requisitos del Proyecto

### Configuración Inicial

1. **Configuración del Proyecto**:
   - Configurar un proyecto **React Native** usando **React Native CLI** con **TypeScript**.
   - Utilizar **Styled Components** para el diseño.
   - Configurar **ESLint** y **Prettier** para mantener la consistencia y limpieza del código.

2. **Autenticación**:
   - Implementar autenticación de usuarios con **Auth0**.
   - Proteger el estado global de autenticación utilizando **Redux Toolkit**.
   - Seguir el estilo de diseño para la pantalla de autenticación y mostrar la imagen del usuario después de la autenticación.

3. **Gestión de Productos**:
   - Integrar **Axios** para el consumo de la API.
   - Implementar **Redux Toolkit** para la gestión del estado.
   - Crear, editar, eliminar y ver productos, incluyendo un formulario de creación de productos accesible desde el botón de "alerta".

4. **Diseño de UI/UX**:
   - Implementar el diseño siguiendo el esquema de **Figma** y garantizar un diseño **pixel-perfect**.
   - Implementar el filtrado por categorías para mejorar la experiencia del usuario.

5. **Persistencia de Estado**:
   - Utilizar **Redux Toolkit** junto con **AsyncStorage** para persistir el estado de la aplicación en el dispositivo del usuario.

6. **Pruebas Críticas**:
   - Escribir una prueba unitaria para el formulario de creación de productos, asegurando la correcta visualización y funcionalidad de los campos.

### Requisitos Adicionales

1. **Pruebas**:
   - Escribir pruebas unitarias críticas para asegurar la funcionalidad.
   
2. **Despliegue**:
   - Proveer instrucciones claras para desplegar la aplicación.
   - Incluir un enlace para acceder a la aplicación en línea.

3. **Documentación**:
   - Documentar los pasos de configuración y despliegue de la aplicación.
   - Añadir comentarios al código para explicar las decisiones de diseño.

## Librerías y Herramientas

- **React Native**: https://reactnative.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Styled Components**: https://styled-components.com/
- **Redux Toolkit**: https://redux-toolkit.js.org/
- **Axios**: https://axios-http.com/
- **AsyncStorage**: https://react-native-async-storage.github.io/async-storage/
- **Auth0**: https://auth0.com/
- **ESLint**: https://eslint.org/
- **Prettier**: https://prettier.io/

## Configuración de la Aplicación

```bash
# Paso 1: Iniciar el Servidor Metro

Ejecuta el siguiente comando desde la raíz del proyecto para iniciar **Metro**, el servidor que empaqueta el código de **React Native**.

# usando npm
npm start

# usando Yarn
yarn start

# Paso 2: Ejecutar la Aplicación

Con Metro en ejecución, abre un nuevo terminal desde la raíz del proyecto y utiliza uno de los siguientes comandos para iniciar la aplicación en un dispositivo Android o iOS.

#### Android

# usando npm
npm run android

# usando Yarn
yarn android

#### iOS

# usando npm
npm run ios

# usando Yarn
yarn ios

# Paso 3: Modificar la Aplicación

1. Abre `App.tsx` y realiza las modificaciones que necesites.
2. **Para Android**: presiona <kbd>R</kbd> dos veces o selecciona **"Reload"** desde el menú de desarrollo para ver los cambios.
3. **Para iOS**: presiona <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> en el simulador.
