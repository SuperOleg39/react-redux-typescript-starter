import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Simple from './simple/simple';
import withCount from './hoc/withCount';
import DisplayCount from './hoc/DisplayCount';
import LazyLoad from './lazy/LazyLoad';
import WindowQueries from './renderProps/windowQueries';
import DisplaySize from './renderProps/displaySize';

const Counter = withCount(DisplayCount);
const load = () => import(/* webpackChunkName: 'lazy-component' */'./lazy/lazyComponent');

interface IAppProps {
    title: string;
}

const App = ({title}: IAppProps) => <div>
    <h1>{title}</h1>

    <Simple
        customProperty="Simple field component"
        placeholder="type some text..."
        onFocus={() => console.log('is focused!')}
    />

    <Counter
        title="High Order Component"
        increment={5}
    />

    <LazyLoad load={load} />

    <WindowQueries>
        {({ width, height }) => <DisplaySize title="render children" width={width} height={height} />}
    </WindowQueries>

    <WindowQueries
        render={
            ({ width, height }) => <DisplaySize title="render property" width={width} height={height} />
        }
    />
</div>;

ReactDOM.render(
    <App title="Hello, React!" />,
    document.getElementById('root')
);