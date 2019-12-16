import React from 'react';
import {render} from '@testing-library/react';
import Main from '../Main';

test('<Main/>', () => {
    const {container: {firstChild}} = render(<Main/>);
    expect(firstChild).toMatchSnapshot();
});
