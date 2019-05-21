import React, { Component } from 'react';

interface ISectionIntro {
    content: string;
    animation?: boolean;
    fadeout?: boolean;
}

export class SectionIntro extends Component<ISectionIntro> {
    static defaultProps = {
        animation: false,
        fadeout: false,
    };

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

    render() {
        return (
            <div
                className={`section-intro ${
                    this.props.fadeout ? 'section-intro--fadeout' : ''
                }`}
            >
                <div className='section-intro__title'>{this.renderWords()}</div>
            </div>
        );
    }
}

export default SectionIntro;
