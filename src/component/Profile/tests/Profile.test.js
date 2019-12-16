import React from 'react';
import {render} from '@testing-library/react';
import Profile from '../Profile';

test('<Profile/>', () => {
    const {container: {firstChild}} = render(<Profile/>);
    expect(firstChild).toMatchSnapshot();
});
