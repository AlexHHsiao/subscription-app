import React from 'react';
import {render} from '@testing-library/react';
import Header from '../Header';

test('<Header/>', () => {
    const {container: {firstChild}} = render(<Header getPreview={() => {}}/>);
    expect(firstChild).toMatchSnapshot();
});
