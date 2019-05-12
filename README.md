# CEF Boilerplate
This is a boilerplate that will make your development proccess easier. It has a workflow that works like a website development, but, adapted for UI development. 

Built with Gulp + Webpack + Babel + SASS + ES6

### Features:
- Focused on performance, lightweighted.
- Made to be maintainable and SCALABLE. small, medium or big projects, doesn't matter how much components, it will be easy to maintain.
- Easy for integrating any framework like Vue or React.

### Local development:
- Run `npm install`
- Run `gulp`
- The `index.html` inside the `src` folder, works like a summary. This is the default page that will open when you start the development environment. You can customize it.
- The others folders is just like any other web project structure.

### Building for production:
- Run `npm install`
- Run `gulp production`
- It will make all the minifying proccess, create bundles and will send it to `../../client_packages/dist` folder by default. If you want to change it, go to `gulpfile.js/config.json` and change the `destProd` value.

### Integrating
**I strongly recommend you to use the [ragemp-start](https://github.com/Wuzi/ragemp-starter)**

#### Using with ragemp-starter:
- Clone this repo into the `src` folder
- Run the `npm install` on it
- Run `gulp production`
- Done.

#### Creating a browser:
`mp.browsers.new("package://dist/html/boilerplate.html")`

That's all, folks.

Feel free to open an issue if you have any question.