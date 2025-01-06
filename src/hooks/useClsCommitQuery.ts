import { useQuery } from '@tanstack/react-query'
import { CommitsService } from '../services/CommitsService'
import { QUERY_KEYS } from '../shared/consts'

export function useClsCommitsQuery() {
  const query = useQuery({
    queryFn: CommitsService.getAll,
    queryKey: [QUERY_KEYS.CLS_COMMITS],
    // refetchInterval: 1000,
  })

  return {
    ...query,
    data: query.data?.data,
  }
}
