function TaskLists() {
    return (
        <section>
            <ul id="task-list" className="task-list">
                {/* JavaScript displays tasks here */}
            </ul>
            <div>
                <div className="empty-icon">✓</div>
                <h3>No tasks yet</h3>
                <p>Add your first task to get started.</p>
            </div>
        </section>
    )
}

export default TaskLists;