import LoginScreen from './Login';
import { connect } from 'react-redux';
import { signIn } from '@/actions/auth';
import { IState } from 'src/typings/states/global';

const mapStateToProps = (state: IState) => {
    return {
        errorMsg: state.auth.errorMsg,
        logged: state.auth.token,
    };
};

export default connect(
    mapStateToProps,
    {
        signIn,
    }
)(LoginScreen);
