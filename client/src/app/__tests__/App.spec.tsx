import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from '@/App';

let wrapped: ShallowWrapper;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('renders the App component', () => {
    expect(wrapped.html()).toContain('HomePage');
});
