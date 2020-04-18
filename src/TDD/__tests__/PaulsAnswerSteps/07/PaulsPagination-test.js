import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/07/PaulsPagination'


describe('Pagination Component', () => {

  const factory = props => shallow(<Pagination {...props} />)

  describe('with some text', () => {
    it('renders', () => {

      const wrapper = factory();
      expect(wrapper).not.toBeNull();
    });

    it('renders a div tag', () => {
      // using whitespace as the label, for simplicity.
      const wrapper = factory({ label: ' ' });
      expect(wrapper.find('div').length).toBe(1);
    });

    it('does not render when label is null', () => {
      const wrapper = factory({ label: null });
  
      expect(wrapper.find('div').length).toEqual(0);
    });
  });

  describe('div tag', () => {
    it('has data-tid attribute', () => {
      // using whitespace as the label, for simplicity.
      const wrapper = factory({ label: ' ' });


      const dataTidAttribute = wrapper.find('[data-tid="pagination"]');

      expect(dataTidAttribute.exists()).toBe(true);
      expect(dataTidAttribute.prop('data-tid')).toBe('pagination');

    });
    
    it('has className attribute', () => {
      // using whitespace as the label, for simplicity.
      const wrapper = factory({ label: ' ' });
      const classNameAttribute = wrapper.find('[className="Pagination"]');

      expect(classNameAttribute.exists()).toBe(true);
      expect(classNameAttribute.prop('className')).toBe('Pagination');

    });

    it('has nested span', () => {
      // using whitespace as the label, for simplicity.
      const wrapper = factory({ label: ' ' });
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

  describe('link', () => {
    const someLabelText = 'some text';
    // haven't handled the case where previousUrl not set yet
    const someLinkText = 'some url';
    const wrapper = factory({ label: someLabelText, previousUrl: someLinkText });
    const linkTag = wrapper.find('a');

    it('gets rendered with a link', () => {
      expect(linkTag.length).toBe(1);
    });

    it('has className attribute', () => {
      const classNameAttribute = linkTag.prop("className");
      expect(classNameAttribute).toBe('Pagination_Previous');
    });

    it('has href attribute', () => {
      const hrefAttribute = linkTag.prop("href");
      expect(hrefAttribute).toBe(someLinkText);
    });

    it('has data-tid attribute', () => {
      const dataTidAttribute = linkTag.prop("data-tid");
      expect(dataTidAttribute).toBe("previous");
    });

  });

  // Added the attributes to the link tag for previous link
  describe('with previous link', () => {
    const someLabelText = 'some text';
    const someLink = 'https://beaufortfairmont.com/webinars';
    const wrapper = factory({ label: someLabelText, previousUrl: someLink });
    const linkTag = wrapper.find('a');


    it('gets rendered with the previus link', () => {
      expect(linkTag.prop("href")).toEqual(someLink);
    });

    it('has className attribute', () => {
      expect(linkTag.prop("className")).toEqual("Pagination_Previous");
    });

  });

});
