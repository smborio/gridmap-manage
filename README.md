# gridmap-manage

## Technologies Used

This project uses the following technologies:

- **JavaScript (ES6+)**: The project is written in modern JavaScript.

- **Webpack**: We use Webpack as a module bundler. It takes our JavaScript files and bundles them into one file for production. It also allows us to use ES6 modules in the browser.

- **Babel**: Babel is a JavaScript compiler that we use to transpile ES6 (and newer) code to ES5. This makes our project compatible with older browsers.

- **SVG**: We use SVG to create a grid in the browser. SVG allows us to create complex shapes and graphics directly in our HTML.

## Plugins Used

This project uses the following plugins:

- **html-webpack-plugin**: This is a plugin for webpack that simplifies the creation of HTML files to serve your webpack bundles. It's especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can configure it to generate an HTML file, serve your webpack bundles, and automatically inject script tags for them.

- **html-webpack-inline-source-plugin**: This is a plugin for webpack that works in conjunction with the html-webpack-plugin. It allows you to inline your assets in the generated HTML file. We use it to inline SVG filters defined in separate HTML files into our main `index.html` file.

Remember to install these plugins with npm using the command `npm install --save-dev html-webpack-plugin html-webpack-inline-source-plugin`. Then, you can require them in your `webpack.config.js` file and add new instances to your plugins array.

## Setup

To set up this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the project's dependencies.
4. Run `npm run build` to bundle the JavaScript files.