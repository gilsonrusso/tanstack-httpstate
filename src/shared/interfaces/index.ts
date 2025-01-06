export type TStatus = 'inprogress' | 'done' | 'failed'
export interface IClsCommits {
  id: string
  clBase: number
  status: TStatus
  commits: string[]
}

export interface HttpResponse<T> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  config: Record<string, any>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  request?: any
}
