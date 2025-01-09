import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommitsService } from '../services/CommitsService'
import { QUERY_KEYS } from '../shared/consts'
import type { IClsCommits } from '../shared/interfaces'

export function useClsCommitsMutate() {
  const queryClient = useQueryClient()

  const checkStatus = async (id: string): Promise<IClsCommits> => {
    const response = await CommitsService.getById(id)
    if (response.data.status === 'inprogress') {
      throw new Error('Status is still in progress')
    }
    return response.data
  }

  const mutate = useMutation({
    mutationFn: CommitsService.add,
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.CLS_COMMITS],
        })
        await queryClient.refetchQueries({ queryKey: [QUERY_KEYS.CLS_COMMITS] })
      } catch (error) {
        console.error('Error invalidating queries:', error)
      }
    },
    onSettled: async (data) => {
      if (data) {
        const checkStatusPeriodically = async (id: string) => {
          try {
            const response = await checkStatus(id)
            if (response.status === 'inprogress') {
              setTimeout(() => checkStatusPeriodically(id), 10000) // 10s to retry
            } else {
              await queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.CLS_COMMITS],
              })
            }
          } catch (error) {
            setTimeout(() => checkStatusPeriodically(id), 10000) // 10s to retry
          }
        }
        checkStatusPeriodically(data.data.id)
      }
    },
  })

  return mutate
}
