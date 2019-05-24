import React, { Component } from 'react';
import SectionIntro from '@/components/SectionIntro';
import { IAfficheState } from 'src/typings/states/global';
import GalleryItem from '@/components/GalleryItem';

interface IGalleryScreenP {
    fetchAffiches?: () => void;
    affiches: IAfficheState[];
}

export class GalleryScreen extends Component<IGalleryScreenP> {
    contentRef: React.RefObject<HTMLDivElement>;
    introRef: React.RefObject<HTMLDivElement>;
    scrolling: boolean;

    constructor(props: IGalleryScreenP) {
        super(props);
        this.contentRef = React.createRef();
        this.introRef = React.createRef();
        this.scrolling = false;
    }

    componentDidMount() {
        const { fetchAffiches } = this.props;
        if (fetchAffiches) {
            fetchAffiches();
        }
    }

    renderList = () => {
        const { affiches } = this.props;

        if (affiches) {
            return affiches.map(affiche => {
                return <GalleryItem affiche={affiche} key={affiche.id} />;
            });
        }
    };

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

    render() {
        return (
            <div className='gallery'>
                <SectionIntro
                    onScroll={this.handleScroll}
                    introRef={this.introRef}
                    content='Gallerie'
                    fadein={true}
                />
                <div
                    onWheel={this.handleScrollUp}
                    className='gallery__list'
                    ref={this.contentRef}
                >
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default GalleryScreen;
