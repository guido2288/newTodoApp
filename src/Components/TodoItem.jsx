import cross from '../images/icon-cross.svg';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, theme }) => {

  return (
    <li className={`todo-item ${theme}`}>
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
