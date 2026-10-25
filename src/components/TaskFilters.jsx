function TaskFilters() {
    return (
        <section className="filter-section mb-3">
            <h2 className="section-heading">Your tasks</h2>
            <div className="filter-buttons" aria-label="Filter tasks">
                <button
                    type="button"
                    className="filter-button active"
                    data-filter="all"
                >
                    All
                </button>
                <button type="button" className="filter-button" data-filter="pending">
                    Pending
                </button>
                <button type="button" className="filter-button" data-filter="completed">
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TaskFilters;