import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../Pagination'

// Hints:
// Run the component with specified props:
// const wrapper = factory({ label: 'testing' })
//
// Find elements within the component:
// const links = wrapper.find('a')
// const next = wrapper.find('[data-tid=next]')
//
// Check for existence:
// expect(links.length).toBe(0)
// expect(next.exists()).toBe(true)
//
// Get an attribute:
// const href = next.prop('href')
// expect(href).toEqual('/url')

describe('<Pagination />', () => {
  const defaultProps = {
    label: '11 - 20 of 300',
    nextUrl: '/next',
    previousUrl: '/prev',
  }

  const factory = props => shallow(<Pagination {...props} />)

  describe('with no label', () => {
    it('renders nothing', () => {
      // Create props list with nextUrl and previousUrl, but no label
      const props = {
        ...defaultProps,
        label: null,
      }
      const wrapper = factory(props)
      expect(wrapper.equals(null)).toBe(true)
    })
  })

  describe('with just a label prop', () => {
    const wrapper = factory({ label: defaultProps.label })

    it('renders the label', () => {
      expect(wrapper.find('span').text()).toEqual(defaultProps.label)
    })
    it('does not render links', () => {
      expect(wrapper.find('a').length).toBe(0)
    })
  })

  describe('with label and nextUrl prop', () => {
    const wrapper = factory({label: defaultProps.label, nextUrl: defaultProps.nextUrl})
    const next = wrapper.find('[data-tid="next"]')

    it('renders the label', () => {
      expect(wrapper.find('span').text()).toEqual(defaultProps.label)
    })
    it('renders the next link', () => {
      expect(next.exists()).toBe(true)
    })
    it('passes the nextUrl value to the link', () => {
      expect(next.prop('href')).toEqual(defaultProps.nextUrl)
    })
    it('does not render the previous link', () => {
      expect(wrapper.find('[data-tid="previous"]').exists()).toBe(false)
    })
  })

  describe('with label and previousUrl prop', () => {
    const wrapper = factory({label: defaultProps.label, previousUrl: defaultProps.previousUrl})
    const previous = wrapper.find('[data-tid="previous"]')

    it('renders the label', () => {
      expect(wrapper.find('span').text()).toEqual(defaultProps.label)
    })
    it('renders the previous link', () => {
      expect(previous.exists()).toBe(true)
    })
    it('passes the previousUrl value to the link', () => {
      expect(previous.prop('href')).toEqual(defaultProps.previousUrl)
    })
    it('does not render the next link', () => {
      expect(wrapper.find('[data-tid="next"]').exists()).toBe(false)
    })
  })

  describe('with label, nextUrl, and previousUrl prop', () => {
    const wrapper = factory(defaultProps)
    const next = wrapper.find('[data-tid="next"]')
    const previous = wrapper.find('[data-tid="previous"]')

    it('renders the label', () => {
      expect(wrapper.find('span').text()).toEqual(defaultProps.label)
    })
    it('renders the previous link', () => {
      expect(previous.exists()).toBe(true)
    })
    it('passes the previousUrl value to the link', () => {
      expect(previous.prop('href')).toEqual(defaultProps.previousUrl)
    })
    it('renders the next link', () => {
      expect(next.exists()).toBe(true)
    })
    it('passes the nextUrl value to the link', () => {
      expect(next.prop('href')).toEqual(defaultProps.nextUrl)
    })
  })
})
