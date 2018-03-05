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

### Links in React-Router-Dom

Web application needs a way to navigate between pages. If we were to create links using anchor elements, clicking on them would cause the whole page to reload. React Router provides a <Link> component to prevent that from happening. When clicking a <Link>, the URL will be updated and the rendered content will change without reloading the page. <br/>

##### So we need to import Link component from React-Router-Dom

    import { Link } from 'react-router-dom'

`<Link>`  use the `to` prop to describe the location that they should navigate to. This can either be a string or a location object (containing a combination of `pathname`, `search`, `hash`, and `state` properties). When it is a string, it will be converted to a location object.


### Routes in React-Router-Dom

The `<Route>` component is the main building block of React Router. Anywhere that you want to only render something if it matches the location’s pathname, you should create a <Route> element. <br/>

A `<Route>` expects a `path` prop string that describes the type of pathname that the route matches. <br/>

When the route’s path matches, a match object with the following properties will be created:

    url —the matched part of the current location’s pathname
    path — the route’s path
    isExact —path === pathname
    params — an object containing values from the pathname that were captured by 'path-to-regexp'

#### Creating Routes

<Route>s can be created anywhere inside of the router, but often it makes sense to render them in the same place. You can use the<Switch> component to group <Route>s. The <Switch> will iterate over its children elements (the routes) and only render the first one that matches the current pathname.In order to match a path in our application, all that we have to do is create a <Route> element with the path prop we want to match. </br>

##### What does the <Route> render?
Routes have three props that can be used to define what should be rendered when the route’s path matches. Only one should be provided to a <Route> element.

    1. component — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement). 
    2. render — A function that returns a React element [5]. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
    3. children — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.

In the following I have used those three ways to route

        <Route path='/page' component={Page} />

        const extraProps = { color: 'red' }
        <Route path='/page' render={(props) => (
        <Page {...props} data={extraProps}/>
        )}/>
        
        <Route path='/page' children={(props) => (
        props.match
            ? <Page {...props}/>
            : <EmptyPage {...props}/>
        )}/>

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

## Redux

Redux is a predictable state container for JavaScript apps.<br/>

Redux can be described in three fundamental principles:<br/>
-The state of the whole application is stored in an object tree within a single store.
-The only way to change the state is to emit an action, an object describing what happened.
-To specify how the state tree is transformed by actions, you write pure reducers.

more details - https://redux.js.org/  <br/>

##### * Add Redux package in to project and add in to the package.json
    npm install react-redux --save

### Redux-Logic

REdux-Logic is a middleware. Middleware is the suggested way to extend Redux with custom functionality. The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency. We can use middleware to handle business logic. In some apps this might mean validation, verification, authorization. It might mean denying certain invalid attempts to change state or prevent illegal operations.Business logic governs the user’s UI and helping them to understand actions that are appropriate at any given time.

##### * Add Redux-logic package in to project and add in to the package.json
    npm install redux-logic --save

###### Add middleware and store in to project

    // Create redux-logic middleware
    const logicMiddleware = createLogicMiddleware(services, {});


    // Middlewares: applyMiddleware() tells createStore() how to handle middleware
    const middleware = applyMiddleware(logicMiddleware)

    // Create enhancer and add REDUX_DEVTOOLS_EXTENSION
    const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

    // Create store
    let store = createStore(reducers, enhancer);

`<Provider />` is the higher-order component provided by React Redux that lets you bind Redux to React. We will wrap `<Router />` in `<Provider />` so that route handlers can get access to the store.


### Redux Actions

Actions are payloads of information that starts send data from your application to your store. Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. It may have a payload property that includes the information.<br/>

Here I used redux-action.

##### * Add redux-actions package in to project

    npm install --save redux-actions

### Redux Reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe the fact that something happened, but don't describe how the application's state changes.In Redux, all the application state is stored as a single object.The reducer is a pure function that takes the previous state and an action, and returns the next state.<br/>

    (previousState, action) => newState


### Redux Store

we defined the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.The Store is the object that brings them together. The store has the following responsibilities:

- Holds application state

- Allows access to state via getState()

- Allows state to be updated via dispatch(action). <br/>
    I used redux-action package. Because of that we can update state using  handleActions(). `handleAction(type, reducer, defaultState)`

- Registers listeners via subscribe(listener)

- Handles unregistering of listeners via the function returned by subscribe(listener)





























### * Semantic UI

Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.<br/>

##### * Add Semantic UI package in to project and add in to the package.json
    npm install semantic-ui-react --save

##### Grid in Semantic UI
Grids divide horizontal space into indivisible units called "columns". All columns in a grid must specify their width as proportion of the total available row width.All grid systems chooses an arbitrary column count to allow per row. Semantic's default theme uses 16 columns.<br/>

##### Rows in Semantic UI
Rows are groups of columns which are aligned horizontally.
    For more details - https://semantic-ui.com/collections/grid.html <br/>

### * Redux-form

Redux form is the best way to manage form state in Redux.

##### * Add Redux-form package in to project and add in to the package.json
    npm install redux-form --save