import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = { open: true };

    toggle = () => this.setState({ open: !this.state.open });
    render() {
        return (
            <div className='navigation'>
                <input
                    type='checkbox'
                    className='navigation__checkbox'
                    id='navi-toggle'
                    checked={this.state.open}
                />
                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon' onClick={this.toggle}>
                        &nbsp;
                    </span>
                </label>
                <div className='navigation__background'>&nbsp;</div>
                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        <li className='navigation__item'>
                            <Link
                                to='/affiches'
                                className='navigation__link'
                                onClick={this.toggle}
                            >
                                Affiches -
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link
                                to='/gallery'
                                className='navigation__link'
                                onClick={this.toggle}
                            >
                                Galeries -
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <a
                                href='#'
                                className='navigation__link'
                                onClick={this.toggle}
                            >
                                Manifeste
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a
                                href='#'
                                className='navigation__link'
                                onClick={this.toggle}
                            >
                                Projet -
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a
                                href='#'
                                className='navigation__link'
                                onClick={this.toggle}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
