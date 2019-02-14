# The Artist Almanac

A webapp to find artists, access to their facebook profile and their upcoming events.

## Requirements
- Node.js 8.8+
- NPM 5+ / yarn


## Setup the project locally


1. Install the node dependencies:

   ```
   npm install
   ```
   or
   ```
   yarn
   ```
2. Run the project locally
    ```
   npm start
   ```
   or
   ```
   yarn start
   ```
3. Run unit test
   ```
   npm run test
   ```
   or
   ```
   yarn test
   ```
`

   ## Project structure
   The project is built using [create-react-app](https://github.com/facebook/create-react-app) so the folder structure follows the common pattern of a standard CRA application.

    `▸ build/` in here is where the CRA tools is storing the production ready css and js files
    `▸ src/`  where the application source code reside.
    `▸ src/components` this directory contains all the stateless functional components. Mainly classified on components rendering application specific data, and UI components, which provide the overall layout of the app, including a responsive custom grid component.

    `▸ src/containers` contains the class component in charge of calling to the API.

    `▸ src/hoc` is a specific directory for High Order Components.

    `▸ public/` where the `index.html` resides used by the development server.

    `▸ src/store` contains redux actions and reducers.

    `▸ src/helper` helper functions used across the application.


## Build and deploy process

To deploy this app with github pages I followed these steps: 
1. Install gh-pages package in your root directory:

   ```
   npm install --save gh-pages
   ```
   or
   ```
   yarn add gh-pages --save
   ```
2. Setup your package.json.
    ```
   change your hompage: "homepage": https://[your-user-name].github.io/[your-repo-name]/
   ```
   and add the following scripts:
   ```
   "predeploy": "yarn run build",
   ```
   "deploy": "gh-pages -d build",
   ```
3. Deploy the application
   ```
   npm run deploy

   ```
   or
   ```
   yarn deploy
   ```
`

To see a deployed version of the application please visit  
[artist almanac](https://alexbcn84.github.io/artist-almanac/).

