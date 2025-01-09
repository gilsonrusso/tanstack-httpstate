import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { CustomButton } from './components/button/CustomButton'
import { CustomInput } from './components/input/CustomInput'
import { TableWrapper } from './components/table'
import { TableComponents } from './components/table/Tables'
import { useClsCommitsMutate } from './hooks/useClsCommitMutate'
import { useClsCommitsQuery } from './hooks/useClsCommitQuery'
import type { IClsCommits } from './shared/interfaces'

const generateClsCommits = (input: string): IClsCommits[] => {
  return input
    .split(';')
    .map((value) => value.trim())
    .filter((value) => value)
    .map((value) => ({
      id: uuidv4(),
      clBase: Number.parseInt(value, 10),
      status: 'inprogress',
      commits: [],
    }))
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const { data, isLoading } = useClsCommitsQuery()
  const { mutate, isSuccess } = useClsCommitsMutate()

  const handleSubmit = async () => {
    if (!inputRef.current?.value) {
      return
    }
    const generatedData = generateClsCommits(inputRef.current?.value)

    for (const element of generatedData) {
      mutate(element)
    }
  }

  return (
    <div id="app">
      <div className="flex gap-2 mb-3">
        <CustomInput
          className="w-full bg-white"
          disabled={isLoading}
          label="Cls"
          ref={inputRef}
          reset={isSuccess}
          variant="filled"
        />
        <CustomButton
          className="disabled:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed w-36"
          disabled={isLoading}
          label={isLoading ? 'Loading...' : 'Submit'}
          onClick={handleSubmit}
        />
      </div>
      <TableWrapper.Root>
        <TableComponents.CustomTable
          paginationSize={5}
          rows={data}
          isLoading={isLoading}
        />
        <TableWrapper.Legend />
      </TableWrapper.Root>
    </div>
  )
}

export default App
