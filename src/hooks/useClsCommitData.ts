import { useQuery } from '@tanstack/react-query'
import type { AxiosPromise } from 'axios'
import axiosInstance from '../lib/Axios'
import type { IClsCommits } from '../shared/interfaces'

const request = async (): AxiosPromise<IClsCommits[]> => {
  const response = await axiosInstance.get<IClsCommits[]>('/commits')
  return response
}

export function useClsCommits() {
  const query = useQuery({
    queryFn: request,
    queryKey: ['clsCommits-data'],
    // refetchInterval: 1000,
  })

  return {
    ...query,
    data: query.data?.data,
  }
}
