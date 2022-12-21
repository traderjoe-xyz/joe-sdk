import JSBI from 'jsbi'
import { Token } from './token'
import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * Represents the native currency of the chain on which it resides, e.g. ETH, AVAX
 */
export class NativeCurrency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly isNative: true = true
  public readonly isToken: false = false
  public readonly chainId: number

  /**
   * Constructs an instance of the base class `NativeCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(chainId: number, decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)
    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public equals(other: NativeCurrency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}

/*
 * CNATIVE is the main usage of a 'native' currency, i.e. ETH, AVAX, BNB
 */
export class CNATIVE extends NativeCurrency {
  constructor(chainId: number) {
    const symbol = [43113, 43114].includes(chainId) ? 'AVAX' : [56, 97].includes(chainId) ? 'BNB' : 'ETH'
    const name = [43113, 43114].includes(chainId) ? 'Avalanche' : [56, 97].includes(chainId) ? 'BNB' : 'Ethereum'
    super(chainId, 18, symbol, name)
  }
  public equals(other: NativeCurrency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  private static _etherCache: { [chainId: number]: CNATIVE } = {}

  public static onChain(chainId: number): CNATIVE {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new CNATIVE(chainId))
  }
}

/**
 * for backward compatibility
 */
const CAVAX = CNATIVE.onChain(43114)
export { CAVAX }

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export type Currency = NativeCurrency | Token
