import Index from './../index.js';

test('renders without crashing', () => {
    expect(
        JSON.stringify(
            Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
        ),
    ).toMatchSnapshot();
});
