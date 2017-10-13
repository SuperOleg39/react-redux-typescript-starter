import * as React from 'react';

export interface IModuleProps {
    description: string;
}

export class Module extends React.Component<IModuleProps, {}> {
    render() {
        console.log('Module is render');
        const { description } = this.props;
        return <h2>{description}</h2>;
    }
}