import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/08/PaulsPagination'


describe('Pagination Component', () => {

  const factory = props => shallow(<Pagination {...props} />)
  const someLabelText = 'some text';
  const someLinkText = 'some url';

  describe('with some text', () => {
    it('renders', () => {
      const wrapper = factory();
      expect(wrapper).not.toBeNull();
    });

    it('renders a div tag', () => {
      const wrapper = factory({ label: someLabelText });
      expect(wrapper.find('div').length).toBe(1);
    });

    it('does not render when label is null', () => {
      const wrapper = factory({ label: null });
      expect(wrapper.find('div').length).toEqual(0);
    });
  });

  describe('div tag', () => {
    const wrapper = factory({ label: someLabelText });

    it('has data-tid attribute', () => {
      const dataTidAttribute = wrapper.find('[data-tid="pagination"]');
      expect(dataTidAttribute.exists()).toBe(true);
      expect(dataTidAttribute.prop('data-tid')).toBe('pagination');
    });
    
    it('has className attribute', () => {
      const classNameAttribute = wrapper.find('[className="Pagination"]');
      expect(classNameAttribute.exists()).toBe(true);
      expect(classNameAttribute.prop('className')).toBe('Pagination');
    });

    it('has nested span', () => {
      const spanTag = wrapper.find('span');
      expect(spanTag.exists()).toBe(true);
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

  // Let's handle what we do when there is no previous link.
  describe('link', () => {
    const wrapper = factory({ label: someLabelText, previousUrl: someLinkText });
    const linkTag = wrapper.find('a');

    it('gets rendered with a link', () => {
      expect(linkTag.length).toBe(1);
    });

    it('does not render with no link', () => {
      const wrapperWithNoLink = factory({ label: someLabelText });
      expect(wrapperWithNoLink.find('a').length).toBe(0)
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

    // oversite, forgot to add a check for the link text.
    it('has link text', () => {
      expect(linkTag.text()).toEqual("< Previous");
    });

  });
});
