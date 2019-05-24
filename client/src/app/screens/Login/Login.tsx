import React, { Component, FormEvent } from 'react';
import AdminScreen from '@/screens/Admin';

interface ILoginScreenP {
    signIn?: (username: string, password: string) => void;
    errorMsg?: string;
    logged?: string;
}

export class LoginScreen extends Component<ILoginScreenP> {
    state = { username: '', password: '' };

    handleUsernameChange = ({
        target: { value },
    }: {
        target: { value: string };
    }) => {
        this.setState({ username: value });
    };

    handlePasswordChange = ({
        target: { value },
    }: {
        target: { value: string };
    }) => {
        this.setState({ password: value });
    };

    handleSubmit = (event: FormEvent) => {
        const { signIn } = this.props;
        const { username, password } = this.state;

        event.preventDefault();
        if (signIn) {
            signIn(username, password);
        }
    };

    errorRendering = () => {
        const { errorMsg } = this.props;

        if (errorMsg) {
            return <p className='error-msg m-t-s'>{errorMsg}</p>;
        }
        return null;
    };

    render() {
        const { logged } = this.props;

        return logged ? (
            <AdminScreen />
        ) : (
            <div className='login'>
                <form className='login__box' onSubmit={this.handleSubmit}>
                    <div className='login__group'>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={this.state.username}
                            placeholder='Username'
                            className='login__group--input'
                            onChange={this.handleUsernameChange}
                        />
                        <label
                            className='login__group--label'
                            htmlFor='username'
                        >
                            Username
                        </label>
                    </div>

                    <div className='login__group'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            value={this.state.password}
                            className='login__group--input'
                            onChange={this.handlePasswordChange}
                        />
                        <label
                            className='login__group--label'
                            htmlFor='password'
                        >
                            Password
                        </label>
                    </div>
                    <button className='btn'>Sign in</button>
                    {this.errorRendering()}
                </form>
            </div>
        );
    }
}

export default LoginScreen;
