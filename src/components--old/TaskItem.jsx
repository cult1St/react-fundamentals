function TaskItem({task, index}){
    return(
        <li index={index}>
            {task.title} -- {task.id}
        </li>
    )
}

export default TaskItem;