# React-Redux-Web-App
This a web application that implementing using React.js  JavaScript library for build user interfaces and Redux,an open-source JavaScript library designed for managing application state.

Create React App is the best way to start building a new React single page application.
You’ll need to have Node >= 6 on your machine.

#### * Starter kit for development of react modules/components. <br />
    npm install -g create-react-app

#### * Create react application named react-redux-web-app  using starter kit.<br />
    create-react-app react-redux-web-app

#### * Go inside to the project directory <br />
    cd react-redux-web-app

#### * Run web application  <br />
    npm start

#### * Delete Unwanted files and update files <br />
    modified:   src/App.js
    modified:   src/index.js
    deleted:    src/App.test.js
    deleted:    src/index.css
    deleted:    src/logo.svg
    deleted:    src/App.css

### React Router

 React Router is a collection of navigational components that compose declaratively with web application.React Router has been broken into three packages: 
    react-router, 
    react-router-dom,
    react-router-native. <br />
  There are `<BrowserRouter>` and `<HashRouter>` components in React-router-dom. The <BrowserRouter> should be used when you have to handle dynamic requests (to respond to any possible URI), while the `<HashRouter>` should be used for static websites (can only respond to requests for files that it knows about). <br>
 Usually it is preferable to use a `<BrowserRouter>`, but if your website will be hosted on a server  and that only serves static files, then `<HashRouter>` is a good solution.

#### * Add  react-router-dom package and add in to the package.json (--save tag will add that package in to the package.json)
     react-router-dom --save

### Rendering a Component

 Other than DOM tags(ex-`<div>`) we can also use user-defined components to view contents. <br/>
 When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.
 We can use user-defined component inside render() function by using that component name inside '</>'<br/>
    ex - 
    import Navbar from './../modules/navbar'; //user defined component
    class Dashboard extends Component {
        render() {
            return(
                <React.Fragment>
                    <Navbar/>
                    Dashboard
                </React.Fragment>
            )
        }
    }

**important -  We can only return one root component. So we have to to wrap all the components in to one root component. To do that we use `</React.Fragment>`**


### * Semantic UI

Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.<br/>

#### * Add Semantic UI package in to project and add in to the package.json
    npm install semantic-ui-react --save

###### Grid in Semantic UI
Grids divide horizontal space into indivisible units called "columns". All columns in a grid must specify their width as proportion of the total available row width.All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.<br/>

####### Rows in Semantic UI
Rows are groups of columns which are aligned horizontally.
    For more details - https://semantic-ui.com/collections/grid.html