import 'core-js/es6/promise';
import 'core-js/es6/map';
import 'core-js/es6/set';

if (typeof window.requestAnimationFrame !== 'function') {
    window.requestAnimationFrame = (callback: FrameRequestCallback) => window.setTimeout(callback, 0);
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Field from './components/Field';
import Users from './components/Users';

require('assets/less/index.less');

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div>
            <h1>Hello, Redux!</h1>
            <Field placeholder='I like dev tools!' />
            <h2>API Users</h2>
            <Users />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));