import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodyContainer from '../src/components/BodyContainer';

describe('<Form /> component test', () => {

  it('should have first div with heading class', () => {
    
    const component = shallow(<BodyContainer />)
    expect(component.find('div').first().hasClass('container-fluid heading')).to.equal(true)
  })

  it('should have second div with footer class', () => {
    
    const component = shallow(<BodyContainer />)
    expect(component.find('div').at(1).hasClass('container-fluid footer')).to.equal(true)
  })
})

