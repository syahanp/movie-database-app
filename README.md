# Movie Database App

![Project screenshot](./docs/sample.png 'Project screenshot')

## Introduction
This project bootstrapped with : 
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [TailwindCSS](https://tailwindcss.com)

## Available Scripts

### `npm start`

Runs the app in the development mode. The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Architecture
All files related to React components are stored in `src` folder, which in it consist of :

### Assets
`assets` folder includes all static file required for the project. In this project, this folder has `image` folder if netflix background.

### Components
Components includes all components related to the project. Each folder in it represent one single reusable component and others associated with it. In this project, a component folder includes :
- `index.tsx` - a component itself and styles defined in it
- `Component.test.tsx` - describe testing for the component
- `style.module.css` - a css module for some edge cases when tailwindCSS can't handle related to its component style

### Redux
Redux folder consist of `Actions` and `Reducers` where all redux related state management. 

### Helper
Helper folder only has one file, `index.ts` file. It contains all helper function related for the project purposses.

### Hooks
Hooks folder only has one file, `index.tsx` file. It contains all custom hooks related for the project purposses.

### Pages
Pages folder includes all page related to the project. It used to bundle a components into one solid page, that react-router can render for particular url. 

### Style
Style folder usually just for main style that applied globally in the project. In this project, there is `main.css` that only handle font sizing and background color with help of tailwindCSS.

### index.html
It contain basic html boilerplate with `#root` node to render React component. 

### App.tsx
This file include react-router to route which page to render in particular url. So in this file, we have `LandingPage.tsx` and `Movie.tsx` and Modal component to popup poster of the movie whenever user click the poster wherever they are.

### index.tsx
This file is responsible to render `App.tsx` to the DOM.