import { useForm } from "../Hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>

      <input
        type="text"
        placeholder="Create a new todo..."
        className="form"
        name="description"
        value={description}
        onChange={onInputChange}
      >
      </input>


    </form>
  )
}
