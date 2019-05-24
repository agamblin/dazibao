import { connect } from 'react-redux';
import GalleryScreen from './Gallery';
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
)(GalleryScreen);
