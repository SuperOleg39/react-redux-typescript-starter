import * as React from 'react';
import { InjectedProps } from './withCount';

interface OriginProps {
    title: string;
}

const DisplayCount = (props: OriginProps & InjectedProps) => (
    <div>
        <h4>{props.title}</h4>
        <div>Count: {props.count}</div>
    </div>
);

export default DisplayCount;