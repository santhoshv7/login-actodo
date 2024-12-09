
function TodoItem(props){

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    function deleteItem(deleteId){
        var temparr = activityArr.filter(function(item){
            if (item.id == deleteId){
                return false
            }
            else {
                return true
            }
                
        })
        setActivityArr(temparr)
    }

    return(
        <>
        <div className="flex justify-between">
        <p>{props.index+1}. {props.item.activity}</p>
        <button className="text-red-500" onClick = {()=>deleteItem(props.id)}>Delete</button>

        </div>
        </>
    )
}

export default TodoItem