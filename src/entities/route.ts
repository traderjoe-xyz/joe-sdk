import { ChainId } from '../constants'
import invariant from 'tiny-invariant'

import { Currency } from './currency'
import { Token, WAVAX } from './token'
import { Pair } from './pair'
import { Price } from './fractions/price'

export class Route {
  public readonly pairs: Pair[]
  public readonly path: Token[]
  public readonly input: Currency
  public readonly output: Currency
  public readonly midPrice: Price

  public constructor(pairs: Pair[], input: Currency, output?: Currency) {
    invariant(pairs.length > 0, 'PAIRS')
    invariant(
      pairs.every(pair => pair.chainId === pairs[0].chainId),
      'CHAIN_IDS'
    )
    invariant(
      (input instanceof Token && pairs[0].involvesToken(input)) ||
        (input.isNative && pairs[0].involvesToken(WAVAX[pairs[0].chainId])),
      'INPUT'
    )
    invariant(
      typeof output === 'undefined' ||
        (output instanceof Token && pairs[pairs.length - 1].involvesToken(output)) ||
        (output.isNative && pairs[pairs.length - 1].involvesToken(WAVAX[pairs[0].chainId])),
      'OUTPUT'
    )

    const path: Token[] = [input instanceof Token ? input : WAVAX[pairs[0].chainId]]
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i]
      invariant(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), 'PATH')
      const output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0
      path.push(output)
    }

    this.pairs = pairs
    this.path = path
    this.midPrice = Price.fromRoute(this)
    this.input = input
    this.output = output ?? path[path.length - 1]
  }

  public get chainId(): ChainId {
    return this.pairs[0].chainId
  }
}
