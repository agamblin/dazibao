import React, { Component } from 'react';

interface ISectionIntro {
    content: string;
    onScroll?: () => void;
    animation?: boolean;
    fadeout?: boolean;
    fadein?: boolean;
    introRef?: React.RefObject<HTMLDivElement>;
}

export class SectionIntro extends Component<ISectionIntro> {
    scrolling: boolean;

    static defaultProps = {
        animation: false,
        fadeout: false,
        fadein: false,
    };

    constructor(props: ISectionIntro) {
        super(props);
        this.scrolling = false;
    }

    renderWords = () => {
        const words = this.props.content.split(' ');
        return words.map((word: string, i: number) => {
            return (
                <span
                    className={
                        this.props.animation
                            ? `section-intro__title--${i + 1}`
                            : ''
                    }
                    key={i}
                >
                    {word}
                </span>
            );
        });
    };

    handleOnWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (!this.scrolling && this.props.onScroll && event.deltaY > 0) {
            this.props.onScroll();
            this.scrolling = true;
            setTimeout(() => (this.scrolling = false), 1000);
        }
    };

    render() {
        return (
            <div
                className={`section-intro ${
                    this.props.fadeout ? 'section-intro--fadeout' : ''
                } ${this.props.fadein ? 'section-intro--fadein' : ''}`}
                onWheel={this.handleOnWheel}
                ref={this.props.introRef}
            >
                <div className='section-intro__title'>{this.renderWords()}</div>
            </div>
        );
    }
}

export default SectionIntro;
