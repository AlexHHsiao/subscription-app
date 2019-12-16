import React from 'react';
import {render} from '@testing-library/react';
import Spinner from '../Spinner';

test('<Spinner/>', () => {
    const {container: {firstChild}} = render(<Spinner open={true}/>);
    expect(firstChild).toMatchSnapshot();
});
