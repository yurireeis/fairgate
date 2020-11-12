import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  let props;
  let shallowOrder;
  let renderedOrder;
  let mountedOrder;

  const shallowTestComponent = () => {
    if (!shallowOrder) {
      shallowOrder = shallow(<Order {...props} />);
    }
    return shallowOrder;
  };

  const renderTestComponent = () => {
    if (!renderedOrder) {
      renderedOrder = render(<Order {...props} />);
    }
    return renderedOrder;
  };

  const mountTestComponent = () => {
    if (!mountedOrder) {
      mountedOrder = mount(<Order {...props} />);
    }
    return mountedOrder;
  };  

  beforeEach(() => {
    props = {};
    shallowOrder = undefined;
    renderedOrder = undefined;
    mountedOrder = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
