import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Field from './components/Field';
import Users from './components/Users';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div>
            <h1>Hello, Redux!</h1>
            <Field placeholder='I like dev tools!' />

            <h3>API Users</h3>
            <Users />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));