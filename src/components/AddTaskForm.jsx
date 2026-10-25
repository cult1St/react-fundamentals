function AddTaskForm() {
    return (
        <section className="form-section mb-4">
            <h2 className="section-heading" id="form-heading">
                Add a new task
            </h2>
            <form >
                <div className="d-flex flex-column flex-sm-row gap-2">
                    <input
                        type="text"
                        id="task-input"
                        className="form-control"
                        placeholder="What do you need to do?"
                        maxLength={150}
                    />
                    <button type="submit" id="submit-button" className="add-button">
                        Add Task
                    </button>
                </div>
                <p id="form-message" className="form-message" role="status" />
            </form>
        </section>
    )
}
export default AddTaskForm;