import * as React from 'react';

interface LazyLoadProps {
    load: () => Promise<{ default: React.ComponentType }>;
}

interface LazyLoadState {
    Component: React.ComponentType;
}

class LazyLoad extends React.Component<LazyLoadProps, LazyLoadState> {
    state: LazyLoadState = {
        Component: null
    }

    async componentDidMount() {
        const { load } = this.props;

        try {
            const module = await load();
            const Component = module.default;
            this.setState({ Component });
        } catch (e) {
            // do nothing
        }
    }

    render() {
        const { Component } = this.state;

        return (
            <div>
                <h4>Lazy load component</h4>
                {Component ? <Component /> : '...'}
            </div>
        );
    }
}

export default LazyLoad;