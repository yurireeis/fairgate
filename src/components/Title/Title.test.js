import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  let props;
  let shallowTitle;
  let renderedTitle;
  let mountedTitle;

  const shallowTestComponent = () => {
    if (!shallowTitle) {
      shallowTitle = shallow(<Title {...props} />);
    }
    return shallowTitle;
  };

  const renderTestComponent = () => {
    if (!renderedTitle) {
      renderedTitle = render(<Title {...props} />);
    }
    return renderedTitle;
  };

  const mountTestComponent = () => {
    if (!mountedTitle) {
      mountedTitle = mount(<Title {...props} />);
    }
    return mountedTitle;
  };  

  beforeEach(() => {
    props = {};
    shallowTitle = undefined;
    renderedTitle = undefined;
    mountedTitle = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
