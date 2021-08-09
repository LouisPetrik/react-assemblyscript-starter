# Getting Started with this template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, first run: 

### `yarn run build:wasm`
to build the WASM file, based on the index.ts in the assembly-directory. 

Then, you can run 
### `yarn start`
to start the app in the development mode. 

## Understanding the useWasm hook 
The hook is based on as-bind, which is a wrapper for the official AssemblyScript loader. 
The hook fetches, and saves all retrieved functions in the state, returning it, so the 
AssemblyScript functions can be used everywhere. 

