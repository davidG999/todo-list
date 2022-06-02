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
    <div className={`flex w-full p-4 mb-2 m-2 justify-between
      ${isCompleted ? 'bg-gray-600' : 'bg-green-600'}`}
    >
      <div className='flex'>
        <input
          className='h-7 w-7 mr-2 shrink-0'
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />
        <p
          className={`
          ml-2 text-xl font-sans font-medium break-all
          ${isCompleted && "text-gray-800 line-through"}
        `}
        >
          {task}
        </p>
      </div>

      <div>
        <button
          onClick={() => handleDeleteTodo(id)}
          className='h-7 w-7 flex justify-center items-center bg-red-500 hover:bg-red-600 ml-5 rounded'>
          <CrossIcon width={20} />
        </button>
      </div>
    </div>
  )
}

export default Row