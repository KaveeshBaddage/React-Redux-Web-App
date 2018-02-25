import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import services from './services';
import reducers from './reducers';

// Create redux-logic middleware
const logicMiddleware = createLogicMiddleware(services, {});


// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(logicMiddleware)

// Create enhancer
const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// Create store
let store = createStore(reducers, enhancer);

console.log("Store is ", store.getState());

store.subscribe(() => {
    console.log("Store is updated", store.getState());
});


ReactDOM.render(
    <Provider store={store}>
    <HashRouter > 
                <Route path="/" component={App} />        
    </HashRouter>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
