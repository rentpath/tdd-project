import {
  getPaginationLabel,
  getPaginationNextUrl,
  getPaginationPreviousUrl,
} from '../selectors'

describe('selectors', () => {
  describe('getPaginationLabel', () => {
    describe('when there are no results', () => {
      const state = {
        total: 0,
      }

      it('returns empty label', () => {
        expect(getPaginationLabel(state)).toEqual('')
      })
    })

    describe('when on page 1', () => {
      const state = {
        total: 100,
        page: 1,
      }

      it('returns the label', () => {
        expect(getPaginationLabel(state)).toEqual('1 - 30 of 100 Properties')
      })
    })

    describe('when on page 2', () => {
      const state = {
        total: 100,
        page: 2,
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
})
