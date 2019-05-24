import { connect } from 'react-redux';
import Navigation from './Navigation';
import { IState } from 'src/typings/states/global';

const mapStateToProps = (state: IState) => {
    return {
        logged: state.auth.token,
    };
};
export default connect(mapStateToProps)(Navigation);
