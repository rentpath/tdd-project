import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/01/PaulsPagination'


// Making the simplest test I can possibly make.
describe('Pagination Component', () => {

  const factory = props => shallow(<Pagination />);

  describe('with some text', () => {
    it('renders', () => {
      const wrapper = factory();
      expect(wrapper).not.toBeNull();
    });
  });
});
