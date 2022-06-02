type Todo = {
  id: string,
  task: string,
  isCompleted: boolean
}

type TodoProps = {
  todo: Todo
}

const Row = ({ todo: { task, isCompleted } }: TodoProps) => {
  return (
    <div className="">
      <p>{task}</p>
      <div>
        <button onClick={() => null}>X</button>
        <input type="checkbox" checked={isCompleted} onChange={() => null} />
      </div>
    </div>
  )
}

export default Row