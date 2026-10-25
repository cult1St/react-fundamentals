import TaskItem from './TaskItem'

function Tasks(){
    const tasks = [
        { id: 1, title: "Learn JSX" },
        { id: 2, title: "Build a component" }
    ];

    return (
        <div>
            <ul>
                {tasks.map((task, index) => {
                    return <TaskItem task={task} index={index} /> 
                })}
            </ul>
        </div>
    )
}

export default Tasks;