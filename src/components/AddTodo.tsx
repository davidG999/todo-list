import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { FormEvent, ChangeEvent } from 'react';

export type AddTodoProps = {
  task: string
  handleSubmitTodo: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}

const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange
}: AddTodoProps) => {
  return (
    <form className="flex justify-between w-full mb-10" onSubmit={(handleSubmitTodo)}>
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 rounded p-2 text-gray-800 mr-3"
        onChange={(handleChange)}
      />

      <button className='opacity-80 hover:opacity-100' type='submit'>
        <PlusIcon />
      </button>
    </form>
  );
}

export default AddTodo;