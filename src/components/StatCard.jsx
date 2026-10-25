function StatCard({ title, count }) {
    return (
        <div className="col-6 col-md-4">
            <div className="stat-card">
                <p>{title}</p>
                <h2>{count}</h2>
            </div>
        </div>
    );
}

export default StatCard;