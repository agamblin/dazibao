import { connect } from 'react-redux';
import GalleryItem from './GalleryItem';
import { IState } from 'src/typings/states/global';

const mapStateToProps = (state: IState) => {
    return {
        logged: state.auth.token,
    };
};

export default connect(
    mapStateToProps,
    {}
)(GalleryItem);
