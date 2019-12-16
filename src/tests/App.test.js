import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('<App/>', () => {
    const {container: {firstChild}} = render(<App/>);
    expect(firstChild).toMatchSnapshot();
});
