import React from 'react';
import renderer from 'react-test-renderer';
import AppView from './app-view';

describe('AppView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<AppView />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
