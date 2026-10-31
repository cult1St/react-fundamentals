function TaskLists({ tasks, filter, onMarkTaskCompleted, onDeleteTask }) {
    return (
        <section>
            <ul className="task-list">
                {tasks.length > 0 ? tasks
                    .filter(task => {
                        if (filter === "completed") return task.completed;
                        if (filter === "pending") return !task.completed;
                        return true;
                    })
                    .map(task => (
                        <li key={task.id} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onMarkTaskCompleted(task.id)}
                            />
                            <span className={task.completed ? "completed" : ""}>
                                {task.title}
                            </span>
                            <button
                                type="button"
                                className="delete-button"
                                onClick={() => onDeleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                    : (
                        <div className="empty-state">
                            <div className="empty-icon">✓</div>
                            <h3>No tasks yet</h3>
                            <p>Add your first task to get started.</p>
                        </div>
                    )}
            </ul>

        </section>
    )
}

export default TaskLists;