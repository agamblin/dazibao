import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '@/services/history';

import Navigation from '@/components/Navigation';

import SplashScreen from '@/screens/SplashScreen';
import AffichesScreen from '@/screens/Affiches';
import GalleryScreen from '@/screens/Gallery';

// tslint:disable-next-line: no-import-side-effect
import '@assets/sass/main.scss';

export class App extends Component {
    state = { loading: true };

    sleep = async (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    launchCountdown = async () => {
        await this.sleep(3000);
        this.setState({ loading: false });
    };

    render() {
        this.launchCountdown().catch(() => this.setState({ loading: false }));
        const appContent = this.state.loading ? (
            <SplashScreen />
        ) : (
            <div>
                <Router history={history}>
                    <Navigation />
                    <Switch>
                        <Route
                            path='/affiches'
                            exact
                            component={AffichesScreen}
                        />
                        <Route
                            path='/gallery'
                            exact
                            component={GalleryScreen}
                        />
                    </Switch>
                </Router>
            </div>
        );
        return appContent;
    }
}

export default App;
