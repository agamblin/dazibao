import React, { Component } from 'react';

interface IAffichesFormP {
    onClickOutside: () => void;
    // tslint:disable-next-line: no-any
    createAffiche?: (file: any, description: string) => Promise<void>;
}

export class AffichesForm extends Component<IAffichesFormP> {
    state = { file: null, description: '', errorMsg: undefined };
    // tslint:disable-next-line: no-any
    onClick = (event: any) => {
        const { onClickOutside } = this.props;
        event.preventDefault();
        if (event.target === event.currentTarget) {
            onClickOutside();
        }
    };

    renderImage = () => {
        const { file } = this.state;

        if (file) {
            return (
                <img
                    alt='affiche img'
                    className='affiches-form__form__form-group__img'
                    src={URL.createObjectURL(this.state.file)}
                />
            );
        }
        return (
            <img
                alt='affiche img'
                className='affiches-form__form__form-group__img'
                src='http://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png'
            />
        );
    };

    // tslint:disable-next-line: no-any
    handleImageChange = (e: any) => {
        this.setState({ file: e.target.files[0] });
    };

    handleSubmit = async (e: React.FormEvent) => {
        const { createAffiche, onClickOutside } = this.props;
        const { file, description } = this.state;
        e.preventDefault();

        if (createAffiche) {
            if (!file && description.length === 0) {
                this.setState({ errorMsg: 'Missing image or description' });
            } else {
                await createAffiche(
                    file,
                    description.replace(/\r\n|\r|\n/g, '<br/>')
                );
                onClickOutside();
                this.setState({ file: null, description: '' });
            }
        }
    };

    handleDescriptionChange = ({
        target: { value },
    }: {
        target: { value: string };
    }) => {
        this.setState({ description: value });
    };

    displayErrorMessage = () => {
        const { errorMsg } = this.state;

        if (errorMsg) {
            return <p className='error-msg m-t-s'>{errorMsg}</p>;
        }
    };

    render() {
        return (
            <div className='affiches-form' onDoubleClick={this.onClick}>
                <form
                    className='affiches-form__form'
                    onSubmit={this.handleSubmit}
                >
                    <div className='affiches-form__form__container'>
                        <div className='affiches-form__form__form-group'>
                            <input
                                hidden
                                className='affiches-form__form__form-group__input'
                                id='image_file'
                                type='file'
                                name='image_file'
                                accept='image/*'
                                onChange={this.handleImageChange}
                            />
                            <figure className='affiches-form__form__form-group__shape'>
                                {this.renderImage()}
                                <figcaption>
                                    <label
                                        htmlFor='image_file'
                                        className='btn btn--reverted'
                                    >
                                        Change Image
                                    </label>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='affiches-form__form__form-group'>
                            <textarea
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                                className='affiches-form__form__form-group__textarea'
                            />
                        </div>
                    </div>
                    {this.displayErrorMessage()}
                    <button className='btn btn--reverted m-t-s'>
                        Validate
                    </button>
                </form>
            </div>
        );
    }
}

export default AffichesForm;
