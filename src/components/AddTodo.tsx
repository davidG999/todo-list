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
    <form onSubmit={(handleSubmitTodo)}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(handleChange)}
      />

      <button type='submit'>
        <PlusIcon width={30} />
      </button>
    </form>
  );
}

export default AddTodo;