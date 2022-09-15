import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TodoList(props) {
    const { data, deleteTodo, todoPage, checkboxHandler } = props
    const [slicedItems, setSlicedItems] = useState(data)
    const [sliced, setSliced] = useState(false)

    useEffect(() => {
        if (data.length === 0) {
            return (
                <div>нет ToDo</div>
            )
        }
        if (todoPage === undefined) {
            if (data.length > 5) {
                let arr = data.slice()
                let removed = arr.splice(0, 5)
                setSlicedItems(removed)
                setSliced(true)
            }
        }
    }, [])
    

    return (
        <ul className='todoList'>
            {slicedItems.map((item, index) => (
                    <li key={index} className='todoList__item'>
                        <input id='checkbox' type='checkbox' onChange={() => checkboxHandler(index)}/>
                        {item.title}
                        <button onClick={() => deleteTodo(index)}>удалить ToDo</button>
                    </li>
                ))}
            {todoPage === undefined && sliced && (
                <Link to='/todoPage'>открыть весь список задач</Link>
            )}
        </ul>
    )
}
