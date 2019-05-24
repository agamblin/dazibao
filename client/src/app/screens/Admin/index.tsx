import { connect } from 'react-redux';
import AdminScreen from './Admin';
import { signOut, fetchUserInfo } from '@/actions/auth';
import { IState } from 'src/typings/states/global';

const mapStateToProps = (state: IState) => {
    return {
        user: state.auth.user,
    };
};

export default connect(
    mapStateToProps,
    {
        signOut,
        fetchUserInfo,
    }
)(AdminScreen);
