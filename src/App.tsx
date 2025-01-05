import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { CustomButton } from './components/button/CustomButton'
import { CustomInput } from './components/input/CustomInput'
import { CustomTable } from './components/table/CustomTable'
import { useClsCommits } from './hooks/useClsCommitData'
import { useClsCommitsMutate } from './hooks/useClsCommitMutate'
import type { IClsCommits } from './shared/interfaces'

const generateIClsCommits = (input: string): IClsCommits[] => {
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

  const { data, isLoading } = useClsCommits()
  const { mutate, isSuccess } = useClsCommitsMutate()

  const handleSubmit = async () => {
    if (!inputRef.current?.value) {
      return
    }
    const generatedData = generateIClsCommits(inputRef.current?.value)

    for (const element of generatedData) {
      mutate(element)
    }
  }

  return (
    <>
      <h1 className="text-xl mb-3">Tanstack / React Query / HTTP State</h1>
      <div className="flex gap-2 mb-3">
        <CustomInput
          isLoading={isLoading}
          isSuccessful={isSuccess}
          label={'Cls'}
          variant={'filled'}
          ref={inputRef}
        />
        <CustomButton
          onClick={handleSubmit}
          label={'Submit'}
          isLoading={isLoading}
        />
      </div>
      <CustomTable pagination={5} dataGrid={data} isLoading={isLoading} />
    </>
  )
}

export default App
