import React, { Component } from 'react';
import SectionIntro from '@/components/SectionIntro';
import { IAfficheState } from 'src/typings/states/global';
import AffichesItem from '@/components/AffichesItem';

interface IAffichesScreenP {
    fetchAffiches?: () => void;
    affiches: IAfficheState[];
}

export class AffichesScreen extends Component<IAffichesScreenP> {
    state: { affiche?: IAfficheState } = { affiche: undefined };

    contentRef: React.RefObject<HTMLDivElement>;
    introRef: React.RefObject<HTMLDivElement>;
    scrolling: boolean;
    history: IAfficheState[];
    historyIdx: number;

    constructor(props: IAffichesScreenP) {
        super(props);
        this.contentRef = React.createRef();
        this.introRef = React.createRef();
        this.scrolling = false;
        this.history = [];
        this.historyIdx = 0;
    }

    // SCROLLING LOGIC
    handleScroll = () => {
        if (this.contentRef.current) {
            window.scrollTo(0, this.contentRef.current.offsetTop);
        }
    };

    handleScrollUp = (event: React.WheelEvent<HTMLDivElement>) => {
        if (!this.scrolling && event.deltaY < -30 && this.introRef.current) {
            window.scrollTo(0, this.introRef.current.offsetTop);
            this.scrolling = true;
            setTimeout(() => (this.scrolling = false), 1000);
        }
    };

    componentDidMount() {
        const { fetchAffiches } = this.props;
        if (fetchAffiches) {
            fetchAffiches();
        }
    }

    selectNextAffiche = () => {
        const { affiches } = this.props;

        if (this.historyIdx === this.history.length && affiches.length > 0) {
            const selected = Math.floor(Math.random() * affiches.length);
            this.setState({ affiche: affiches[selected] });
            this.history.push(affiches[selected]);
            affiches.splice(selected, 1);
            this.historyIdx = this.history.length;
        } else {
            if (this.historyIdx + 1 <= this.history.length) {
                this.setState({ affiche: this.history[this.historyIdx] });
                this.historyIdx++;
            }
        }
    };

    selectPreviousAffiche = () => {
        if (this.historyIdx - 2 >= 0) {
            this.setState({ affiche: this.history[this.historyIdx - 2] });
            this.historyIdx--;
        }
    };

    renderCurrentAffiche = () => {
        const { affiche } = this.state;
        const { affiches } = this.props;

        if (!affiche && affiches.length > 0) {
            this.selectNextAffiche();
        }
        if (affiche) {
            return (
                <AffichesItem
                    next={this.selectNextAffiche}
                    previous={this.selectPreviousAffiche}
                    affiche={affiche}
                />
            );
        }
    };

    render() {
        return (
            <div className='affiches'>
                <SectionIntro
                    onScroll={this.handleScroll}
                    introRef={this.introRef}
                    content='Affiches'
                    fadein={true}
                />
                <div
                    onWheel={this.handleScrollUp}
                    className='affiches__content'
                    ref={this.contentRef}
                >
                    {this.renderCurrentAffiche()}
                </div>
            </div>
        );
    }
}

export default AffichesScreen;
