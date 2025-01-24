import { Token, Price } from '@chun_11/sdk-core'
import { tickToPrice } from '@chun_11/v3-sdk'

export function getTickToPrice(
  baseToken: Token | undefined,
  quoteToken: Token | undefined,
  tick: number | undefined
): Price<Token, Token> | undefined {
  if (!baseToken || !quoteToken || !tick) {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}
