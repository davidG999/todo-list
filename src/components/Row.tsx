type Todo = {
  id: string,
  task: string,
  isCompleted: boolean
}

type TodoProps = {
  todo: Todo
  handleDeleteTodo: (id: string) => void
}

const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo
}: TodoProps) => {

  return (
    <div className="">
      <p>{task}</p>
      <div>
        <button onClick={() => handleDeleteTodo(id)}>X</button>
        <input type="checkbox" checked={isCompleted} onChange={() => null} />
      </div>
    </div>
  )
}

export default Row