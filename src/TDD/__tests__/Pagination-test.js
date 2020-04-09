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

  // Replace this with your tests
  describe('example of a test', () => {
    it('renders a link', () => {
      const props = {
        ...defaultProps,
        label: 'Override label',
      }
      const wrapper = factory(props)
      const link = wrapper.find('a')

      expect(link.length).toEqual(1)
      expect(link.prop('href')).toEqual('#')
    })
  })
})
