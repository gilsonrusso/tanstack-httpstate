export type TStatus = 'inprogress' | 'done' | 'failed'
export interface IClsCommits {
  id: string
  clBase: number
  status: TStatus
  commits: string[]
}
