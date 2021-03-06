import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from './text';

describe('<Text/>', () => {
  afterEach(cleanup);
  it('should render a <Text/> component', () => {
    const {
      getByText,
      // debug
    } = render(<Text> Hello </Text>);
    // debug('<Text/>');
    const component = getByText('Hello');
    expect(component).toBeTruthy();
    expect(component.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontFamily: 'DeliusUnicase_400Regular' }),
      ]),
    );
  });

  it('should render a <Text /> component with bold font', () => {
    const { getByText } = render(<Text bold> Hello </Text>);
    const component = getByText('Hello');
    expect(component).toBeTruthy();
    expect(component.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontFamily: 'DeliusUnicase_700Bold' }),
      ]),
    );
  });
});
