import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { IStore } from '../store';
import { set, focus, blur } from '../redux/field';

const style = require('./field.less');

interface FieldProps extends DispatchProp<IStore>, React.HTMLProps<HTMLInputElement> {
    value?: string;
}

class Field extends React.Component<FieldProps, {}> {
    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { dispatch } = this.props;
        const value = event.currentTarget.value;
        dispatch(set(value));
    }

    handleFocus = () => {
        const { dispatch } = this.props;
        dispatch(focus());
    }

    handleBlur = () => {
        const { dispatch } = this.props;
        dispatch(blur());
    }

    render() {
        const {
            value,
            dispatch,
            ...inputProps
        } = this.props;

        return (
            <input
                {...inputProps}
                className="Field"
                type="text"
                value={value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: FieldProps) => ({
    value: state.field.value
});

export default connect<{}, {}, FieldProps>(mapStateToProps)(Field);