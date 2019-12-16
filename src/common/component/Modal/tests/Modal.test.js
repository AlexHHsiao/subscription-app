import React from 'react';
import {render} from '@testing-library/react';
import ModalComponent from '../Modal';

const mockData = {
    open: true,
    onClose: () => {},
    modalData: {
        message: '',
        type: 'Error',
        title: 'Something went wrong',
    }
};

test('<ModalComponent/>', () => {
    const {container: {firstChild}} = render(<ModalComponent {...mockData}/>);
    expect(firstChild).toMatchSnapshot();
});
