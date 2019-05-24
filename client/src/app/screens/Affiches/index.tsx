import { connect } from 'react-redux';
import AffichesScreen from './Affiches';
import { IState } from 'src/typings/states/global';
import { fetchAffiches } from '@/actions/affiches';

const mapStateToProps = (state: IState) => {
    return {
        affiches: state.affiches,
    };
};

export default connect(
    mapStateToProps,
    {
        fetchAffiches,
    }
)(AffichesScreen);
