import * as React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
    customProperty: string;
}

interface State {
    value: string;
}

class Simple extends React.Component<Props, State> {
    state: State = {
        value: ''
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        this.setState(() => ({ value }));
    }

    render() {
        const {
            customProperty,
            ...inputProps
        } = this.props;
        const { value } = this.state;

        return (
            <div>
                <h4>{customProperty}</h4>
                <input
                    {...inputProps}
                    value={value}
                    onChange={this.handleChange}
                />
             </div>
        );
    }
}

export default Simple;