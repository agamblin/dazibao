import { connect } from 'react-redux';
import AffichesForm from './AffichesForm';
import { createAffiche } from '@/actions/affiches';

export default connect(
    null,
    {
        createAffiche,
    }
)(AffichesForm);
