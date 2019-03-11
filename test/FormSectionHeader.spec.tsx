import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FormSectionHeader from '../src/components/FormSectionHeader';

describe('<Form /> component test', () => {

  it('should have an input field for bookTitle', () => {
    
    const component = mount(<FormSectionHeader  headerTitle="Hello"/>)
    expect(component.find('h4').text()).to.equal("Hello")
  })
})