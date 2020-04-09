import {
  getPage,
  getPaginationLabel,
  getPaginationNextUrl,
  getPaginationPreviousUrl,
  getPathname,
  getTotal,
} from '../selectors'

describe('selectors', () => {
  describe('getPaginationLabel', () => {
    // INSERT TESTS HERE
    it('has tests', () => {
      expect(false).toEqual(true)
    })
  })

  /*------*/

  describe('getPaginationPreviousUrl', () => {
    // INSERT TESTS HERE
    it('has tests', () => {
      expect(false).toEqual(true)
    })
  })

  /*------*/

  describe('getPaginationNextUrl', () => {
    // INSERT TESTS HERE
    it('has tests', () => {
      expect(false).toEqual(true)
    })
  })

  /*------*/

  describe('getTotal', () => {
    it('returns total from state', () => {
      expect(getTotal({ total: 1})).toEqual(1)
    })

    it('returns 0 when total is zero', () => {
      expect(getTotal({ total: 0 })).toEqual(0)
    })

    it('returns 0 when state is empty', () => {
      expect(getTotal({})).toEqual(0)
    })

    it('returns 0 when total is undefined or null', () => {
      expect(getTotal({ total: undefined })).toEqual(0)
      expect(getTotal({ total: null })).toEqual(0)
    })
  })

  /*------*/

  describe('getPage', () => {
    it('returns page from state', () => {
      expect(getPage({ page: 5})).toEqual(5)
    })

    it('returns 1 when state is empty', () => {
      expect(getPage({})).toEqual(1)
    })

    it('returns 1 when page is undefined or null', () => {
      expect(getPage({ page: undefined })).toEqual(1)
      expect(getPage({ page: null })).toEqual(1)
    })

    it('returns 1 when page is zero', () => {
      expect(getPage({ page: 0 })).toEqual(1)
    })
  })

  /*------*/

  describe('getPathname', () => {
    it('returns pathname from state', () => {
      expect(getPathname({ pathname: '/test'})).toEqual('/test')
    })

    it('returns / when state is empty', () => {
      expect(getPathname({})).toEqual('/')
    })

    it('returns / when pathname is undefined or null', () => {
      expect(getPathname({ page: undefined })).toEqual('/')
      expect(getPathname({ page: null })).toEqual('/')
    })

    it('returns / when pathname is empty string', () => {
      expect(getPathname({ page: '' })).toEqual('/')
    })
  })
})
