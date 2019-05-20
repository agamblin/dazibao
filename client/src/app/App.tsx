import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '@/services/history';

import HomePage from '@/screens/Home';
import LoginPage from '@/screens/Login';

// tslint:disable-next-line: no-import-side-effect
import '@styles/sass/main.scss';

export class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/login' exact component={LoginPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
