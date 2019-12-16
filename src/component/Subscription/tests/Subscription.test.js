import React from 'react';
import {render} from '@testing-library/react';
import Subscription from '../Subscription';

const mockData = {
    subscriptionData: {
        plan: 'best',
        name: 'Best',
        seats: 1,
        cost: 50
    },
    getPreview: () => {},
    getUpdate: () => {},
    previewPrice: () => {}
};

test('<Subscription/>', () => {
    const {container: {firstChild}} = render(<Subscription {...mockData}/>);
    expect(firstChild).toMatchSnapshot();
});
