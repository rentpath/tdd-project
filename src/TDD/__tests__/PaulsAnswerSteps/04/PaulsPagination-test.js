import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/04/PaulsPagination'


// Adding a little funcionality - return some html component - a div.
describe('Pagination Component', () => {

  const factory = props => shallow(<Pagination {...props} />)

  describe('with some text', () => {
    it('renders', () => {

      const wrapper = factory();
      expect(wrapper).not.toBeNull();
    });

    it('renders a div tag', () => {

      const wrapper = factory();
      expect(wrapper.find('div').length).toBe(1);

    });
  });

  describe('div tag', () => {
    it('has data-tid attribute', () => {
      const wrapper = factory();
      const dataTidAttribute = wrapper.find('[data-tid="pagination"]');

      expect(dataTidAttribute.exists()).toBe(true);
      expect(dataTidAttribute.prop('data-tid')).toBe('pagination');
    });
    
    it('has className attribute', () => {
      const wrapper = factory();
      const classNameAttribute = wrapper.find('[className="Pagination"]');

      expect(classNameAttribute.exists()).toBe(true);
      expect(classNameAttribute.prop('className')).toBe('Pagination');
    });

    it('has nested span', () => {

      const wrapper = factory();
      const spanTag = wrapper.find('span');

      expect(spanTag.length).toBe(1);
    });
  });

  describe('label', () => {
    const someLabelText = 'some text';
    const wrapper = factory({ label: someLabelText });

    it('gets rendered with text', () => {
      expect(wrapper.find('span').text()).toEqual(someLabelText);
    });
  });

});
