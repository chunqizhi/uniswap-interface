import { useMemo } from 'react'
import {
  SearchTokensWebQuery,
  Token,
  useSearchTokensWebQuery,
} from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { isBackendSupportedChain } from 'uniswap/src/features/chains/utils'

// Filters out results that are undefined, or where the token's chain is not supported in explore.
function isExploreSupportedToken(token: GqlSearchToken | undefined): token is Token {
  return token !== undefined && isBackendSupportedChain(token.chain)
}

export function useSearchTokens(searchQuery: string = '') {
  const { data, loading, error } = useSearchTokensWebQuery({ variables: { searchQuery }, skip: searchQuery === '' })

  return useMemo(() => {
    const sortedTokens = data?.searchTokens?.filter(isExploreSupportedToken) ?? []
    return { data: sortedTokens, loading, error }
  }, [data?.searchTokens, loading, error])
}

export type GqlSearchToken = NonNullable<NonNullable<SearchTokensWebQuery['searchTokens']>[number]>
