import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Deposit from './Deposit';

describe('Deposit', () => {
  let props;
  let shallowDeposit;
  let renderedDeposit;
  let mountedDeposit;

  const shallowTestComponent = () => {
    if (!shallowDeposit) {
      shallowDeposit = shallow(<Deposit {...props} />);
    }
    return shallowDeposit;
  };

  const renderTestComponent = () => {
    if (!renderedDeposit) {
      renderedDeposit = render(<Deposit {...props} />);
    }
    return renderedDeposit;
  };

  const mountTestComponent = () => {
    if (!mountedDeposit) {
      mountedDeposit = mount(<Deposit {...props} />);
    }
    return mountedDeposit;
  };  

  beforeEach(() => {
    props = {};
    shallowDeposit = undefined;
    renderedDeposit = undefined;
    mountedDeposit = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
