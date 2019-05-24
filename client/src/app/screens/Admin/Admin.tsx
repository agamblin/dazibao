import React, { Component } from 'react';
import { IUser } from 'src/typings/states/global';
import AffichesForm from '@/components/AffichesForm';

interface IAdminScreenP {
    signOut?: () => void;
    fetchUserInfo?: () => void;
    user?: IUser;
}

export class AdminScreen extends Component<IAdminScreenP> {
    state = { affichesFormOpen: false };

    toggleAffichesForm = () =>
        this.setState({ affichesFormOpen: !this.state.affichesFormOpen });

    componentDidMount() {
        const { fetchUserInfo } = this.props;

        if (fetchUserInfo) {
            fetchUserInfo();
        }
    }

    handleSignOut = () => {
        const { signOut } = this.props;

        if (signOut) {
            return <button onClick={signOut}>Sign out</button>;
        }
        return null;
    };

    render() {
        const { signOut, user } = this.props;
        const { affichesFormOpen } = this.state;

        return signOut && user ? (
            <div className='admin'>
                <input
                    type='checkbox'
                    className='affiches-form__toggler'
                    checked={affichesFormOpen}
                    readOnly
                />
                <AffichesForm onClickOutside={this.toggleAffichesForm} />
                <div className='admin__box'>
                    <h1 className='small-intro'>Hi, {user.username}</h1>

                    <hr className='admin__box__separator m-t-s' />
                    <button
                        className='btn btn--reverted m-t-s'
                        onClick={this.toggleAffichesForm}
                    >
                        Add affiche
                    </button>
                    <button className='btn btn--reverted m-t-s'>
                        Change Manifest
                    </button>
                    <button className='btn btn--reverted m-t-s'>
                        Change Project
                    </button>
                    <button className='btn m-t-s' onClick={signOut}>
                        Disconnect
                    </button>
                </div>
            </div>
        ) : null;
    }
}

export default AdminScreen;
