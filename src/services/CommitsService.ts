import axiosInstance from '../lib/Axios'
import type { HttpResponse, IClsCommits } from '../shared/interfaces'
import type { ICommitsService } from './ICommitsService'

export const CommitsService: ICommitsService<IClsCommits> = {
  getAll: async () => {
    const response = await axiosInstance.get<IClsCommits[]>('/commits')
    return {
      ...(response as HttpResponse<IClsCommits[]>),
    }
  },
  add: async (data: IClsCommits) => {
    const response = await axiosInstance.post<IClsCommits>('/commits', data)
    return {
      ...(response as HttpResponse<IClsCommits>),
    }
  },
  getById: async (id: string) => {
    const response = await axiosInstance.get<IClsCommits>(`/commits/${id}`)
    return {
      ...(response as HttpResponse<IClsCommits>),
    }
  },
}
