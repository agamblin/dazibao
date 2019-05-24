import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { IAfficheState } from 'src/typings/states/global';

interface IAffichesItemP {
    affiche: IAfficheState;
    next: () => void;
    previous: () => void;
}

export class AffichesItem extends Component<IAffichesItemP> {
    render() {
        const { affiche, next, previous } = this.props;

        return (
            <div className='affiche-item'>
                <div className='affiche-item--1' onClick={previous}>
                    <figure className='affiche-item__shape'>
                        <img
                            src={affiche.imageUrl}
                            alt='Affiche content'
                            className='affiche-item__img'
                        />
                    </figure>
                </div>
                <div className='affiche-item--2' onClick={next}>
                    <p className='body-text'>
                        {renderHTML(affiche.description)}
                    </p>
                </div>
            </div>
        );
    }
}

export default AffichesItem;
