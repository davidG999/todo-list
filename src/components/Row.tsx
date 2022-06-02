import { ReactComponent as CrossIcon } from '../assets/cross.svg'

type Todo = {
  id: string,
  task: string,
  isCompleted: boolean
}

type TodoProps = {
  todo: Todo
  handleDeleteTodo: (id: string) => void
  handleCheckTodo: (id: string) => void
}

const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo
}: TodoProps) => {

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />
        <p>{task}</p>
      </div>

      <div>
        <button onClick={() => handleDeleteTodo(id)}>
          <CrossIcon width={20}/>
        </button>
      </div>
    </div>
  )
}

export default Row