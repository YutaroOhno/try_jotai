import { useAtom } from 'jotai'
import { todoListState} from './store/atoms'
import { ITodo } from './store/atoms'


export const Todo = (props: any) => {
   const [todoList, setTodoList] = useAtom(todoListState)

   const removeTodo = (target_id: string) => {
      const newTodos = todoList.filter((title, index) => (title.uuid != target_id))
      setTodoList(newTodos)
   }

   return (
      <li>{props.todo.title}<button onClick={ () => removeTodo(props.todo.uuid) }>×</button></li>
   )
}
