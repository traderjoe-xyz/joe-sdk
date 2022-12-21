import { CNATIVE } from '../src'

describe('NativeCurrency', () => {
  describe('CNATIVE', () => {
    it('returns AVAX for 43114', () => {
      expect(CNATIVE.onChain(43114).symbol === 'AVAX').toBe(true)
    })
    it('returns AVAX for 43113', () => {
      expect(CNATIVE.onChain(43113).symbol === 'AVAX').toBe(true)
    })
    it('returns ETH for 42161', () => {
      expect(CNATIVE.onChain(42161).symbol === 'ETH').toBe(true)
    })
    it('returns ETH for 421613', () => {
      expect(CNATIVE.onChain(421613).symbol === 'ETH').toBe(true)
    })
    it('returns BNB for 56', () => {
      expect(CNATIVE.onChain(56).symbol === 'BNB').toBe(true)
    })
    it('returns BNB for 97', () => {
      expect(CNATIVE.onChain(97).symbol === 'BNB').toBe(true)
    })
  })
})
