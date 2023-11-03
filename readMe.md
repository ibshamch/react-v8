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

--- React & Eslint : [
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8

[

### Prettier must become last

{
"extends": [
"eslint:recommended",
"plugin:import/errors",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended",
"prettier"
],
"rules": {
"react/prop-types": 0,
"react/react-in-jsx-scope": 0
},
"plugins": ["react", "import", "jsx-a11y"],
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
},
"settings": {
"react": {
"version": "detect"
},
"import/resolver": {
"node": {
"extensions": [".js", ".jsx"]
}
}
}
}

        ]

[Let's add the ESLint rule. Run npm install -D eslint-plugin-react-hooks@4.6.0. Add this to ESLint:

{
"extends": [
…
"plugin:react-hooks/recommended",
…
]
}
]

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

### Core React Concepts => [

###### JSX:

--- HTML in Javascript
--- {} valid javascript expression

##### Forms:

--- inputs value={can be a hook that changes}

##### Hooks:

--- UseState
---Whenever state changes react re renders the component.
---Render Functions are meant to be totally stateless (not modify the global space (sideeffects) )
--- Hooks can not be created in condtional calls
--- By convention all hooks start with use
--- Custom hooks are other hooks bundled together as one hook
--- Hooks data type should be consistent

### Mapping with Hooks and Array

--- List should be mapped
--- every list child should have unique key (not index)

### Effects

--- When a function modify outer scope data its basically producing side effects.
--- useEffect generates sideEffects
--- Effect happens outside of my component
--- Effects are used when we need something from out of our components (API req etc)
--- useEffect takes a function and array dependency
--- Effect runs everytime function re-renders

--- So if you wanna do async
await inside of an effect,
you have to make an async function inside
of the effect, just how that works.

### onSubmit form pattern :

--- e.preventDefault() -> Prevents form default behavior
--- using states in form is called controlled form (but not a best practice)

### Custom Hooks:

--- Custom hook bundles other hooks inside it.

---In React, a function is considered a custom hook if it satisfies the following conditions:

# Its name starts with the word use.This is a convention in React that helps you identify hooks.

# It calls other hooks like useState, useEffect, useContext, etc. inside of it.

# It encapsulates some logic that is likely to be shared between multiple components.

In the code you provided earlier, useBreedList is a custom hook because it starts with use, and it calls the useState and useEffect hooks. It encapsulates the logic for fetching a list of breeds for a given animal and storing it in a local cache.

Yes, you’re correct. Custom hooks in React are essentially a way to bundle one or more existing hooks together along with some additional logic, and expose them as a reusable function. This allows you to abstract and reuse stateful logic between different components without changing their hierarchy.

Example => [
import { useState, useEffect } from 'react';

function useFetch(url) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
fetch(url)
.then(response => {
if (response.ok) {
return response.json();
} else {
throw response;
}
})
.then(data => setData(data))
.catch(error => setError(error))
.finally(() => setLoading(false));
}, [url]);

return { data, loading, error };
}

Jab aik se zayada hooks ka use krna ho lekin returned answers individual data main chahiye hon to custom hooks use krein .

]

### Component Composition

--- When Components are gettiing too big break them down into small individual reusable components

### React Extras

--- Never ship development mode react to production . Its slower and bigger.

--- Vite Handles it for u but if you're using webpack u have to care what node_env is set to.

--- StrictMode

--- React DevTools

### ..... ]

### React Capabilities [

--- Caches everything automatically
--- Better to use instead of useEffect

React Router is by far the most popular client side router in the React community. It is mature, being used by big companies, and battle tested at large scales.

--- npm install react-router-dom@6.4.1.

--- import BrowserRouter wrap it around App.js/index.js

--- import routes,route

--- Routes se paths banao or batao kis path pe kya show krna hai
--- /:variable directly in html ( path="/details/:id" id basically koi variable hai)

]
