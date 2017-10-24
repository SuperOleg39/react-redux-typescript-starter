import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Field from './components/Field';

const store = configureStore({
    field: {
        value: '',
        focus: false
    }
});

const App = () => (
    <Provider store={store}>
        <div>
            <h1>Hello, Redux!</h1>
            <Field placeholder='I like dev tools!' />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));