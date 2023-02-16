import { useAtom } from 'jotai'
import { todoListState} from './store/atoms'
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { ITodo } from './store/atoms'


export const TodoForm = () => {
    const [todoList, setTodoList] = useAtom(todoListState)
    const [text, setText] = useState("")

    const createId = (): string=> {
        return uuid()
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (text == undefined) {
            return
        }
        const newTodo = {
            uuid: createId(),
            title: text,
            completed: false
        }

        setTodoList([...todoList, newTodo])
        setText("")
    }

    const handleNewTodo= (event: any) => {
        setText(event.target.value)
    }

    return (
        <form  onSubmit={handleSubmit}>
             <input value={ text } placeholder="Add New Task" onChange={handleNewTodo}/>
             <button type="submit">Add</button>
        </form>
    )
 }
