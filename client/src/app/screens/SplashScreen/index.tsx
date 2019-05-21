import React, { Component } from 'react';
import SectionIntro from '@/components/SectionIntro';

export class SplashScreen extends Component {
    render() {
        return (
            <div className='splash-screen'>
                <SectionIntro
                    content='Dazibao Project'
                    animation={true}
                    fadeout={true}
                />
            </div>
        );
    }
}

export default SplashScreen;
