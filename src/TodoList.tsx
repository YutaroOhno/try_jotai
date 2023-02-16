import { Todo } from './Todo'
import { useAtom } from 'jotai'
import { todoListState, ITodo } from './store/atoms'

export const TodoList = () => {
    const [todoList, setTodoList] = useAtom(todoListState)
    return (
        <ul>
            {todoList.map((todo: ITodo, index: number) => {
               return <Todo todo={todo} />
            })}
        </ul>
      );
}

