import { useAtom } from 'jotai'
import { todoListState} from './store/atoms'
import { useState } from 'react';

export const TodoForm = () => {
    const [todoList, setTodoList] = useAtom(todoListState)
    const [todo, setTodo] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setTodoList([...todoList, todo])
    }

    const handleNewTask = (event: any) => {
        setTodo(event.target.value )
    }

    return (
        <form  onSubmit={handleSubmit}>
             <input value={ todo } placeholder="Add New Task" onChange={handleNewTask}/>
             <button type="submit">Add</button>
        </form>
    )
 }
