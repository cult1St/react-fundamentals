import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import StatCard from "./StatCard";
import TaskFilters from "./TaskFilters";
import TaskLists from "./TaskLists";
import { useState } from "react";

function Main() {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    function handleAddTask(task) {
        setTasks([...tasks, task]);
    }

    function handleMarkTaskCompleted(taskId) {
        setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        )
     }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    function handleFilterTasks(filter) {
        setFilter(filter);
    }
    
    return (
        <main className="container py-5">
            <section className="task-container mx-auto">
                <Header />
                {/* Task Statistics */}
                <section className="stats row g-3 mb-4">
                    
                    <StatCard title="Total Tasks" count={tasks.length} />
                    <StatCard title="Pending Tasks" count={tasks.filter(task => !task.completed).length} />
                    <StatCard title="Completed Tasks" count={tasks.filter(task => task.completed).length} />
                </section>
                {/* Task Form */}
                <AddTaskForm onAddTask={handleAddTask} />
                {/* Task Filters */}
                <TaskFilters onFilterChange={handleFilterTasks} currentFilter={filter} />
                {/* Task List */}
                <TaskLists tasks={tasks} filter={filter} onMarkTaskCompleted={handleMarkTaskCompleted} onDeleteTask={handleDeleteTask} />
            </section>
        </main>

    )
}
export default Main;