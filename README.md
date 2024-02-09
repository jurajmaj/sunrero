# Order Management System - React + TypeScript + Vite

This project is an order management system where customers can view their pending and completed orders. The application is built using React, TypeScript, and Vite.

You can view a running prototype of the application at the following URL: https://www.netlify.com

## Setup

To get the project up and running, follow these steps:

1. Clone the repository
2. Install dependencies with `yarn install`
3. Start the development server with `yarn dev`

## Project Description

This project was bootstrapped with Vite, providing a minimal setup for a React application with Hot Module Replacement (HMR) and some ESLint rules.

Official plugin used:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh  

<br />

The application uses the following mock API endpoint to retrieve information about orders: https://run.mocky.io/v3/f7c68647-1010-4479-87f9-2093ff3326cb

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}