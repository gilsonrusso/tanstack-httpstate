import type { HttpResponse } from '../shared/interfaces'

export interface ICommitsService<T> {
  getAll: () => Promise<HttpResponse<T[]>>
  add: (data: T) => Promise<HttpResponse<T>>
  getById: (id: string) => Promise<HttpResponse<T>>
}
