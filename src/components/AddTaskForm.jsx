import { useState } from "react";

function AddTaskForm({onAddTask}) {

    const [task, setTask] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") {
            setError("Please enter a task.");
            return;
        }
        setError("");
        setSuccess("");
        const newTask = {
            id: Date.now(),
            title: task,
            completed: false
        };
        onAddTask(newTask);
        setTask("");
        setSuccess("Task added successfully!");
        
    }

    return (
        <section className="form-section mb-4">
            <h2 className="section-heading" id="form-heading">
                Add a new task
            </h2>
            <form onSubmit={handleSubmit} aria-labelledby="form-heading">
                <div className="d-flex flex-column flex-sm-row gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What do you need to do?"
                        maxLength={150}
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit" id="submit-button" className="add-button">
                        Add Task
                    </button>
                </div>
                <p className="form-message" role="status" >
                    {error && <span className="text-danger">{error}</span>}
                    {success && <span className="text-success">{success}</span>}
                </p>
            </form>
        </section>
    )
}
export default AddTaskForm;