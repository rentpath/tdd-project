import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/02/PaulsPagination'


// Adding a little funcionality - return some html component - a div.
describe('Pagination Component', () => {


  describe('with some text', () => {
    const factory = props => shallow(<Pagination />);

    it('renders', () => {
      const wrapper = factory();
      expect(wrapper.equals(null)).not.toBe(true)
    });

    it('renders a div tag', () => {
      const wrapper = factory();
      expect(wrapper.find('div').length).toBe(1);
    });
  });
});
