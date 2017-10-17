import * as React from 'react';
import { InjectedProps } from './withCount';

interface Props {
    title: string;
}

const DisplayCount = (props: Props & InjectedProps) => (
    <div>
        <h4>{props.title}</h4>
        <div>{props.count}</div>
    </div>
);

export default DisplayCount;