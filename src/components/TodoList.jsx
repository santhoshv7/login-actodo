import TodoItem from "./TodoItem";
function TodoList(props){

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;


    return(
    <>
        <div className="bg-[#BDB4EA] flex-grow p-2 border rounded-md">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr == 0? <p>You haven't added anything yet!</p> : ""}
        {activityArr.map(function(item,index){
            return (<TodoItem id={item.id} index={index} item={item} activityArr={activityArr}
                setActivityArr={setActivityArr}/>)
        })}


    </div>



        </>)
}
export default TodoList