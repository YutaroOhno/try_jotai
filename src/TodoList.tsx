import { Todo } from './Todo'
import { useAtom } from 'jotai'
import { todoListState} from './store/atoms'

export const TodoList = () => {
    const [todoList, setTodoList] = useAtom(todoListState)
    return (
        <div>
            {todoList.map((todo: string, index: number) => {
               return <Todo todo = {todo} key={index} />
            })}
        </div>
      );
}

