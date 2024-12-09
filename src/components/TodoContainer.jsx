import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

function TodoContainer() {

    const [activityArr, setActivityArr] = useState([])

    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />


            </div>

        </>
    )
}

export default TodoContainer