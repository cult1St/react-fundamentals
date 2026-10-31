function TaskFilters({onFilterChange, currentFilter}) {

    const handleFilterClick = (e) => {
        const filter = e.target.getAttribute("data-filter");
        onFilterChange(filter);
        currentFilter = filter;
    }
    return (
        <section className="filter-section mb-3">
            <h2 className="section-heading">Your tasks</h2>
            <div className="filter-buttons" aria-label="Filter tasks">
                <button
                    type="button"
                    className={`filter-button` + (currentFilter === "all" || currentFilter === "" ? " active" : "")}
                    data-filter="all"
                    onClick={handleFilterClick}
                >
                    All
                </button>
                <button type="button" className={`filter-button` + (currentFilter === "pending" ? " active" : "")} data-filter="pending" onClick={handleFilterClick}>
                    Pending
                </button>
                <button type="button" className={`filter-button` + (currentFilter === "completed" ? " active" : "")} data-filter="completed" onClick={handleFilterClick}>
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TaskFilters;