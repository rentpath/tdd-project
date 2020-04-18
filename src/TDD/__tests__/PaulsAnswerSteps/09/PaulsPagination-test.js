import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../PaulsAnswerSteps/09/PaulsPagination'

describe('Pagination Component', () => {

  const factory = props => shallow(<Pagination {...props} />)
  const someLabelText = 'some text';
  const someLinkText = 'some url';
  const someOtherLinkText = 'some other url';

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

  // Pulled this out, as it would have been duplicated in both link test suites.
  describe('with no urls', () => {
    it('no links render', () => {
      const wrapperWithNoLink = factory({ label: someLabelText});
      expect(wrapperWithNoLink.find('a').length).toBe(0)
    });
  });

  describe('with previous link only', () => {
    const someLabelText = 'some text';
    const someLink = 'https://beaufortfairmont.com/webinars';
    const wrapper = factory({ label: someLabelText, previousUrl: someLink });
    const linkTag = wrapper.find('a');

    it('has link text', () => {
      expect(linkTag.text()).toEqual("< Previous");
    });

    it('gets rendered with a link', () => {
      expect(linkTag.exists()).toBe(true);
    });

    it('gets rendered with exactly one link', () => {
      expect(linkTag.length).toBe(1);
    });

    it('has className attribute', () => {
      expect(linkTag.prop("className")).toEqual("Pagination_Previous");
    });

    it('has href attribute', () => {
      const hrefAttribute = linkTag.prop("href");
      expect(hrefAttribute).toBe(someLink);
    });

    it('has data-tid attribute', () => {
      const dataTidAttribute = linkTag.prop("data-tid");
      expect(dataTidAttribute).toBe("previous");
    });
  });

  /* Now I want to add the next link - but I'm realizing, there is more todo, 
   * so I'm making some notes ( I don't care if the notes are right or wrong, just
   * get the thoughts down, so I can deal with them later):
   *     DONE - I need to make sure I know which link is showing, 
   *     DONE - which link is not showing? 
   *     DONE - are both showing when both next and previous url?
   *     DONE - both do not show when no urls
   *     DONE - proper link url in each?
   * */
  describe('with nextUrl only', () => {
    const wrapper = factory({ label: someLabelText, nextUrl: someOtherLinkText });
    const linkTag = wrapper.find('a');
 
    it('has link text', () => {
      expect(linkTag.text()).toEqual("Next >");
    });

    it('gets rendered with a link', () => {
      expect(linkTag.exists()).toBe(true);
    });

    it('gets rendered with exactly one link', () => {
      expect(linkTag.length).toBe(1);
    });

    it('has className attribute', () => {
      expect(linkTag.prop("className")).toEqual("Pagination_Next");
    });

    it('has href attribute', () => {
      const hrefAttribute = linkTag.prop("href");
      // need to fix this
      expect(hrefAttribute).toBe(someOtherLinkText);
    });

    it('has data-tid attribute', () => {
      const dataTidAttribute = linkTag.prop("data-tid");
      expect(dataTidAttribute).toBe("next");
    });
  });

  describe('with both nextUrl and previousUrl', () => {
    const wrapper = factory({ label: someLabelText, previousUrl: someLinkText, nextUrl: someOtherLinkText });
    const linkTag = wrapper.find('a');
 
    it('gets rendered with exactly two links', () => {
      expect(linkTag.length).toBe(2);
    });

    it('has both className attributes', () => {
      expect(linkTag.at(0).prop("className")).toEqual("Pagination_Previous");
      expect(linkTag.at(1).prop("className")).toEqual("Pagination_Next");
    });

    it('has both href attributes', () => {
      expect(linkTag.at(0).prop("href")).toEqual(someLinkText);
      expect(linkTag.at(1).prop("href")).toEqual(someOtherLinkText);
    });

    it('has both data-tid attributes', () => {
      expect(linkTag.at(0).prop("data-tid")).toEqual("previous");
      expect(linkTag.at(1).prop("data-tid")).toEqual("next");
    });

    it('has both link texts', () => {
      expect(linkTag.at(0).text()).toEqual("< Previous");
      expect(linkTag.at(1).text()).toEqual("Next >");
    });
  });
});
