import { ChainId, Token, Pair, TokenAmount, WAVAX, Price } from '../src'

describe('Pair', () => {
  const USDT = new Token(ChainId.FUJI, '0x3763fB99d772D1D96571F39508e34489F400750c', 6, 'USDT', 'USDT Token')
  const JOE = new Token(ChainId.FUJI, '0x477Fd10Db0D80eAFb773cF623B258313C3739413', 18, 'JOE', 'JOE Token')

  const gUSDT = new Token(ChainId.ARB_GOERLI, '0xf450749aeA1c5feF27Ae0237C56FecC43f6bE244', 6, 'USDT', 'Tether Token')
  const gUSDC = new Token(ChainId.ARB_GOERLI, '0xb3482A25a12e5261b02E0acc5b96c656358a4086', 6, 'USDC', 'USD Coin')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () => new Pair(new TokenAmount(USDT, '100'), new TokenAmount(WAVAX[ChainId.AVALANCHE], '100'), ChainId.FUJI)
      ).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(Pair.getAddress(USDT, JOE, ChainId.FUJI)).toEqual('0xd520cF33C013909AFc9Cf158D73F5460753B5ec4')
    })
    it('returns the correct address - arb goerlli', () => {
      expect(Pair.getAddress(gUSDT, gUSDC, ChainId.ARB_GOERLI)).toEqual('0x682d5A31C8BDf110657d92F78467D196007749e3')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).token0).toEqual(USDT)
      expect(new Pair(new TokenAmount(USDT, '100'), new TokenAmount(JOE, '100'), ChainId.FUJI).token0).toEqual(USDT)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).token1).toEqual(JOE)
      expect(new Pair(new TokenAmount(USDT, '100'), new TokenAmount(JOE, '100'), ChainId.FUJI).token1).toEqual(JOE)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '101'), ChainId.FUJI).reserve0).toEqual(
        new TokenAmount(USDT, '101')
      )
      expect(new Pair(new TokenAmount(USDT, '101'), new TokenAmount(JOE, '100'), ChainId.FUJI).reserve0).toEqual(
        new TokenAmount(USDT, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '101'), ChainId.FUJI).reserve1).toEqual(
        new TokenAmount(JOE, '100')
      )
      expect(new Pair(new TokenAmount(USDT, '101'), new TokenAmount(JOE, '100'), ChainId.FUJI).reserve1).toEqual(
        new TokenAmount(JOE, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(JOE, '101'), new TokenAmount(USDT, '100'), ChainId.FUJI).token0Price).toEqual(
        new Price(USDT, JOE, '100', '101')
      )
      expect(new Pair(new TokenAmount(USDT, '100'), new TokenAmount(JOE, '101'), ChainId.FUJI).token0Price).toEqual(
        new Price(USDT, JOE, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(JOE, '101'), new TokenAmount(USDT, '100'), ChainId.FUJI).token1Price).toEqual(
        new Price(JOE, USDT, '101', '100')
      )
      expect(new Pair(new TokenAmount(USDT, '100'), new TokenAmount(JOE, '101'), ChainId.FUJI).token1Price).toEqual(
        new Price(JOE, USDT, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(JOE, '101'), new TokenAmount(USDT, '100'), ChainId.FUJI)
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(USDT)).toEqual(pair.token0Price)
      expect(pair.priceOf(JOE)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WAVAX[ChainId.FUJI])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '101'), ChainId.FUJI).reserveOf(JOE)).toEqual(
        new TokenAmount(JOE, '100')
      )
      expect(new Pair(new TokenAmount(USDT, '101'), new TokenAmount(JOE, '100'), ChainId.FUJI).reserveOf(JOE)).toEqual(
        new TokenAmount(JOE, '100')
      )
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(USDT, '101'), new TokenAmount(JOE, '100'), ChainId.FUJI).reserveOf(WAVAX[ChainId.FUJI])
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).chainId).toEqual(
        ChainId.FUJI
      )
      expect(new Pair(new TokenAmount(USDT, '100'), new TokenAmount(JOE, '100'), ChainId.FUJI).chainId).toEqual(
        ChainId.FUJI
      )
    })
  })
  describe('#involvesToken', () => {
    expect(
      new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).involvesToken(JOE)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).involvesToken(USDT)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(JOE, '100'), new TokenAmount(USDT, '100'), ChainId.FUJI).involvesToken(
        WAVAX[ChainId.FUJI]
      )
    ).toEqual(false)
  })
})
