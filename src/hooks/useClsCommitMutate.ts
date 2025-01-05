import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstance from '../lib/Axios'
import type { IClsCommits } from '../shared/interfaces'

const request = async (data: IClsCommits) => {
  return await axiosInstance.post<IClsCommits>('/commits', data)
}

export function useClsCommitsMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: request,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clsCommits-data'] })
    },
  })

  return mutate
}
