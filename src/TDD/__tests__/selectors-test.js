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
    describe('when there are no results', () => {
      const state = {
        page: 1,
        total: 0,
      }

      it('returns empty label', () => {
        expect(getPaginationLabel(state)).toEqual('')
      })
    })

    describe('when on page 1', () => {
      const state = {
        page: 1,
        total: 100,
      }

      it('returns the label', () => {
        expect(getPaginationLabel(state)).toEqual('1 - 30 of 100 Properties')
      })
    })

    describe('when on page 2', () => {
      const state = {
        page: 2,
        total: 100,
      }

      it('returns the label', () => {
        expect(getPaginationLabel(state)).toEqual('31 - 60 of 100 Properties')
      })
    })

    describe('when on a page that exceeds the total', () => {
      const state = {
        total: 60,
        page: 3,
      }

      it('returns the label', () => {
        expect(getPaginationLabel(state)).toEqual('61 - 90 of 60 Properties')
      })
    })

    describe('when there is only a single page of results', () => {
      const state = {
        page: 1,
        total: 20,
      }

      it('returns the label with just the total properties', () => {
        expect(getPaginationLabel(state)).toEqual('20 Properties')
      })
    })
  })

  /*------*/

  describe('getPaginationPreviousUrl', () => {
    describe('when there are no results', () => {
      const state = {
        page: 1,
        total: 0,
        pathname: '/test',
      }

      it('returns empty string', () => {
        expect(getPaginationPreviousUrl(state)).toEqual('')
      })
    })

    describe('when on page 1', () => {
      const state = {
        page: 1,
        total: 70,
        pathname: '/test',
      }

      it('returns empty string', () => {
        expect(getPaginationPreviousUrl(state)).toEqual('')
      })
    })

    describe('when on page 2', () => {
      const state = {
        page: 2,
        total: 70,
        pathname: '/test',
      }

      it('returns pathname without page=1 parameter', () => {
        expect(getPaginationPreviousUrl(state)).toEqual('/test')
      })
    })

    describe('when on page 3', () => {
      const state = {
        page: 3,
        total: 70,
        pathname: '/test',
      }

      it('returns url with page=2 parameter', () => {
        expect(getPaginationPreviousUrl(state)).toEqual('/test?page=2')
      })
    })
  })

  /*------*/

  describe('getPaginationNextUrl', () => {
    describe('when there are no results', () => {
      const state = {
        page: 1,
        total: 0,
        pathname: '/test'
      }
      
      it('returns empty string', () => {
        expect(getPaginationNextUrl(state)).toEqual('')
      })
    })

    describe('when on the first page and there is only one page', () => {
      const state = {
        page: 1,
        total: 20,
        pathname: '/test'
      }
      
      it('returns empty string', () => {
        expect(getPaginationNextUrl(state)).toEqual('')
      })
    })

    describe('when on the first page and there are three pages', () => {
      const state = {
        page: 1,
        total: 70,
        pathname: '/test'
      }

      it('returns url for page 2', () => {
        expect(getPaginationNextUrl(state)).toEqual('/test?page=2')
      })
    })

    describe('when on the second page and there are three pages', () => {
      const state = {
        page: 2,
        total: 70,
        pathname: '/test'
      }

      it('returns url for page 3', () => {
        expect(getPaginationNextUrl(state)).toEqual('/test?page=3')
      })
    })

    describe('when on the third page and there are three pages', () => {
      const state = {
        page: 3,
        total: 70,
        pathname: '/test'
      }

      it('returns an empty string', () => {
        expect(getPaginationNextUrl(state)).toEqual('')
      })
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
