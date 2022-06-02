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
    <div className="">
      <p>{task}</p>
      <div>
        <button onClick={() => handleDeleteTodo(id)}>X</button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />
      </div>
    </div>
  )
}

export default Row