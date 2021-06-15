import { ChainId, Token, Pair, TokenAmount, WAVAX, Price } from '../src'

describe('Pair', () => {
  const FISH = new Token(ChainId.FUJI, '0xAd1c1a22A0eC39b81034b6c4dC01D5AeC406A4Ad', 18, 'FISH', 'FishToken')
  const MURLOC = new Token(ChainId.FUJI, '0xD6e29Beeb3C37542dCC5C115e44b232ACF487073', 18, 'MURLOC', 'MurlocToken')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () => new Pair(new TokenAmount(FISH, '100'), new TokenAmount(WAVAX[ChainId.AVALANCHE], '100'), ChainId.FUJI)
      ).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      expect(Pair.getAddress(FISH, MURLOC, ChainId.FUJI)).toEqual('0xb875CeCB08CeDAD83fB8738211bc087D0Ee325C2')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).token0).toEqual(FISH)
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).token0).toEqual(FISH)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).token1).toEqual(
        MURLOC
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).token1).toEqual(
        MURLOC
      )
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.FUJI).reserve0).toEqual(
        new TokenAmount(FISH, '101')
      )
      expect(new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).reserve0).toEqual(
        new TokenAmount(FISH, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.FUJI).reserve1).toEqual(
        new TokenAmount(MURLOC, '100')
      )
      expect(new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).reserve1).toEqual(
        new TokenAmount(MURLOC, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.FUJI).token0Price).toEqual(
        new Price(FISH, MURLOC, '100', '101')
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '101'), ChainId.FUJI).token0Price).toEqual(
        new Price(FISH, MURLOC, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.FUJI).token1Price).toEqual(
        new Price(MURLOC, FISH, '101', '100')
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '101'), ChainId.FUJI).token1Price).toEqual(
        new Price(MURLOC, FISH, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(MURLOC, '101'), new TokenAmount(FISH, '100'), ChainId.FUJI)
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(FISH)).toEqual(pair.token0Price)
      expect(pair.priceOf(MURLOC)).toEqual(pair.token1Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WAVAX[ChainId.FUJI])).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(
        new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '101'), ChainId.FUJI).reserveOf(MURLOC)
      ).toEqual(new TokenAmount(MURLOC, '100'))
      expect(
        new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).reserveOf(MURLOC)
      ).toEqual(new TokenAmount(MURLOC, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(FISH, '101'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).reserveOf(
          WAVAX[ChainId.FUJI]
        )
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).chainId).toEqual(
        ChainId.FUJI
      )
      expect(new Pair(new TokenAmount(FISH, '100'), new TokenAmount(MURLOC, '100'), ChainId.FUJI).chainId).toEqual(
        ChainId.FUJI
      )
    })
  })
  describe('#involvesToken', () => {
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).involvesToken(MURLOC)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).involvesToken(FISH)
    ).toEqual(true)
    expect(
      new Pair(new TokenAmount(MURLOC, '100'), new TokenAmount(FISH, '100'), ChainId.FUJI).involvesToken(
        WAVAX[ChainId.FUJI]
      )
    ).toEqual(false)
  })
})
