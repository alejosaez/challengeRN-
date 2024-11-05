# ChallengeRNFront

Este proyecto es el frontend para el desafío de crear una aplicación móvil siguiendo un diseño pixel-perfect utilizando **React Native** con **TypeScript**. La aplicación implementa funcionalidades de autenticación de usuarios, gestión de productos, y filtrado de categorías, además de seguir buenas prácticas de desarrollo y asegurar un alto estándar de código limpio y organizado.

## Descripción del Proyecto

El objetivo fue implementar una interfaz funcional y atractiva que replique fielmente el diseño proporcionado en **Figma**. La aplicación permite la creación y gestión de productos, junto con un flujo de autenticación y una navegación fluida. La autenticación, gestión de estado y persistencia están respaldadas por tecnologías robustas, asegurando un rendimiento óptimo.

- [Diseño en Figma](https://www.figma.com/design/wyEuQ8vu7rkx4kIfm5h9Zn/Coffee-Mobile-App-UI-Template-(Community)?node-id=0-1&t=fFryQwtdgeBl0kwf-0)

## Implementación

### Autenticación

Se implementó autenticación de usuarios utilizando **Auth0**, protegida y gestionada mediante **Redux Toolkit** para mantener la seguridad del estado global. El flujo de autenticación incluye la visualización del avatar de usuario después del inicio de sesión exitoso, asegurando una experiencia de usuario cohesiva y segura.

### Gestión de Productos

La aplicación utiliza **Axios** para manejar las peticiones a la API y **Redux Toolkit** para la gestión de estado. Se puede crear, editar, eliminar y ver productos, con un formulario de creación accesible desde el menú principal. Esto se realizó aplicando el principio de separación de responsabilidades y garantizando un código modular y reutilizable.

### UI/UX y Diseño Pixel-Perfect

Siguiendo el diseño en Figma, se prestó especial atención a lograr un diseño **pixel-perfect** utilizando **Styled Components**. Se implementó filtrado por categorías para mejorar la usabilidad, aplicando principios de **UI/UX** que mejoran la navegación y la accesibilidad.

### Persistencia de Datos

La aplicación utiliza **Redux Toolkit** junto con **AsyncStorage** para persistir los datos localmente en el dispositivo, permitiendo que la información se mantenga incluso si el usuario cierra la aplicación. Esto se integró respetando las buenas prácticas de almacenamiento local, manteniendo el estado de la aplicación rápido y eficiente.

## Buenas Prácticas

Para mantener un código limpio y escalable, se han seguido estas prácticas:

- **Consistencia**: Uso de **ESLint** y **Prettier** para mantener un estilo de código uniforme y limpio.
- **Modularidad y Reutilización**: Componentes desacoplados, centrados en una sola responsabilidad y optimizados para su reutilización.
- **Tipado Estático**: Implementación de **TypeScript** para minimizar errores en tiempo de compilación y mejorar la mantenibilidad del código.
- **Optimización de Desempeño**: Almacenamiento y gestión de estado eficientes con **Redux Toolkit** y **AsyncStorage**.
- **Pruebas Críticas**: Pruebas unitarias en componentes clave, como el formulario de creación de productos, para asegurar la calidad y confiabilidad de la aplicación.

## Cómo Levantar el Proyecto

Sigue los pasos a continuación para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

### Paso 1: Clonar el Repositorio

Clona el repositorio del proyecto en tu máquina local.

```bash
git clone https://github.com/tuusuario/ChallengeRNFront.git
cd ChallengeRNFront

# usando npm
npm install

# usando Yarn
yarn install


Librerías y Herramientas Utilizadas

	•	React Native: https://reactnative.dev/
	•	TypeScript: https://www.typescriptlang.org/
	•	Styled Components: https://styled-components.com/
	•	Redux Toolkit: https://redux-toolkit.js.org/
	•	Axios: https://axios-http.com/
	•	AsyncStorage: https://react-native-async-storage.github.io/async-storage/
	•	Auth0: https://auth0.com/
	•	ESLint: https://eslint.org/
	•	Prettier: https://prettier.io/


