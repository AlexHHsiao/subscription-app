import React from 'react';
import {render} from '@testing-library/react';
import PageNotFound from '../PageNotFound';

test('<PageNotFound/>', () => {
    const {container: {firstChild}} = render(<PageNotFound/>);
    expect(firstChild).toMatchSnapshot();
});
