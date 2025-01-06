import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommitsService } from '../services/CommitsService'
import { QUERY_KEYS } from '../shared/consts'

export function useClsCommitsMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: CommitsService.add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CLS_COMMITS] })
    },
  })

  return mutate
}
