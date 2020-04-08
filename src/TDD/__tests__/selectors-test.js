import {
  getPaginationLabel,
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

  describe('getNextUrl', () => {
    
  })
  
  describe('getPaginationPreviousUrl', () => {
    
  })
})