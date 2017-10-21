import * as React from 'react';

export interface InjectedProps {
    count: number;
}

interface ExternalProps {
    increment: number;
}

interface State {
    count: number;
}

function withCount<OriginProps>(Component: React.ComponentType<OriginProps & InjectedProps>) {

    type ResultProps = OriginProps & ExternalProps;

    return class extends React.Component<ResultProps, State> {
        static displayName = `WithCount(${Component.displayName || Component.name})`;

        state: State = {
            count: 0
        }

        increment = () => {
            const { increment } = this.props;
            this.setState((prevState: State) => ({ count: prevState.count + increment }));
        }

        render() {
            return (
                <div>
                    <Component {...this.props} {...this.state} />
                    <button
                        type="button"
                        onClick={this.increment}
                    > + </button>
                </div>
            )
        }
    }
}

export default withCount;