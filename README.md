# template
template repo for future projects

## npm scripts
"build": starts up the production environment,
"start": starts up the development environment,
"deploy": deploys the code to github pages,
"initialize": installs dev dependencies for images, styling, and html

<!-- ignore (only for educational purposes) -->
## npm setup for development
<!-- In Terminal -->
1. npm init -y
2. npm install --save-dev webpack webpack-cli
<!-- ensure files and named and linked properly in the package.json -->
3. npx webpack
<!-- handles html -->
4. npm install --save-dev html-webpack-plugin 
<!-- handles css -->
5. npm install --save-dev style-loader css-loader
<!-- handles images -->
6. npm install --save-dev html-loader
<!-- development server setup -->
7. npm install --save-dev webpack-dev-server
<!-- start server -->
8. npx webpack serve

