import React, { Component } from 'react';
import { IAfficheState } from 'src/typings/states/global';

interface IGalleryItemP {
    affiche: IAfficheState;
    logged?: string;
}

export class GalleryItem extends Component<IGalleryItemP> {
    renderDeleteButton = () => {
        const { logged } = this.props;

        if (logged) {
            return <figcaption className='btn btn--reverse'>Delete</figcaption>;
        }
        return null;
    };

    render() {
        const { affiche, logged } = this.props;

        return (
            <div
                className={`gallery__list__item ${
                    logged ? 'gallery__list__item--admin' : ''
                }`}
            >
                <img
                    src={affiche.imageUrl}
                    alt='Gallery Item'
                    className='gallery__list__item__img'
                />
                {this.renderDeleteButton()}
            </div>
        );
    }
}

export default GalleryItem;
