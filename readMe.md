# React Setup

--- make src folder
--- create index.html
--- create index.css or style.css
--- create App.js

### Npm

--- npm init

--- npm install -D prettier@2.7.1 [
1- .prettierrc file with {} inside

2-  
 "scripts": {
"format": "prettier --write \"src/\*_/_.{js,jsx}\""
},
]

--- npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0 [

    1- create .eslintrc.json file

    2- config
        {

"extends": ["eslint:recommended", "prettier"],
"plugins": [],
"parserOptions": {
"ecmaVersion": 2022,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"es6": true,
"browser": true,
"node": true
}
}

3- "lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet",

4- npm run lint -- --debug which would translate to eslint \*_/_.js --debug.

5- npm run lint -- --fix
]

--- gitignore

--- VITE : [
1- npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0

2- <script type="module" src="./App.jsx"></script>

3- import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
root: "src",
});

4-

scripts :
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
]

### Built process is done

--- React and React Dom: [
npm install react@18.2.0 react-dom@18.2.0
// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);
]

# Component :

--- Component should always return markup
--- One way data flow (Parent to Child Only)
--- Data Flows through props

# JSX

---
