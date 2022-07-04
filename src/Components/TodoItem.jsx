import cross from '../images/icon-cross.svg';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className="todo-item">
      <span
        className={`todo-text ${(todo.done) ? 'todo-complete' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >{todo.description}</span>
      <img
        src={cross}
        onClick={() => onDeleteTodo(todo.id)}
      />

    </li>
  )
}
