import { useState } from 'react'

function AddTodoForm(props){

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newActivity, setNewActivity] = useState("")

    function handleChange(event){
        setNewActivity(event.target.value)
    }

    function addActivity(){
        setActivityArr([...activityArr, {id:activityArr.length+1, activity:newActivity}])
        setNewActivity("")
    }



    return(<>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium py-2">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange = {handleChange} type="text" placeholder = "Next Activity?" className=" border border-black p-1 bg-transparent" ></input>
                <button onClick = {addActivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>

        </div>
    </>)
    
}

export default AddTodoForm