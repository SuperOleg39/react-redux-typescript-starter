import 'core-js/es6/promise';
import 'core-js/es6/map';
import 'core-js/es6/set';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IModuleProps } from './module';

interface IAppProps {
    title: string;
}

interface IAppState {
    Module: React.ComponentClass<IModuleProps>;
}

class App extends React.Component<IAppProps, IAppState> {
    state: IAppState = { Module: null };
    
    async componentDidMount() {
        try {
            const lazy = await import('./module');
            const Module = lazy.Module;
            
            this.setState({ Module });
        } catch (e) {
            console.log('Error Module loading', e);
        }
    }
    
    render() {
        console.log('App is render');
        const { title } = this.props;
        const { Module } = this.state;
        
        return (
            <div>
                <h1>{title}</h1>
                {Module ? <Module description="Lazy loaded Component" /> : <div>...</div>}
            </div>
        )
    }
}

ReactDOM.render(<App title="Application" />, document.getElementById('root'));