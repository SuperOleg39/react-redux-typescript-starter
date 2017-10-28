import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { IStore } from '../store';
import { getList, Error } from '../redux/users';
import { IUser } from '../services/users';

interface UsersProps extends DispatchProp<IStore> {
    isFetching?: boolean;
    error?: Error;
    users?: IUser[];
}

class Users extends React.Component<UsersProps, {}> {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getList());
    }

    render() {
        const { isFetching, error, users } = this.props;

        if (error) {
            return <b>Произошла ошибка!</b>
        }

        if (isFetching) {
            return '...';
        }

        return users.map((user) => <div key={user.id}>{user.name}</div>);
    }
}

const mapStateToProps = (state: IStore, ownProps: UsersProps) => ({
    isFetching: state.users.getList.isFetching,
    error: state.users.getList.error,
    users: state.users.getList.data
});

export default connect<{}, {}, UsersProps>(mapStateToProps)(Users);