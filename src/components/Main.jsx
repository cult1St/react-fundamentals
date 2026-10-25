import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import StatCard from "./StatCard";
import TaskFilters from "./TaskFilters";

function Main() {
    return (
        <main className="container py-5">
            <section className="task-container mx-auto">
                <Header />
                {/* Task Statistics */}
                <section className="stats row g-3 mb-4">
                    
                    <StatCard title="Total Tasks" count={7} />
                    <StatCard title="Pending Tasks" count={0} />
                    <StatCard title="Completed Tasks" count={0} />
                </section>
                {/* Task Form */}
                <AddTaskForm />
                {/* Task Filters */}
                <TaskFilters />
                {/* Task List */}
                
            </section>
        </main>

    )
}
export default Main;