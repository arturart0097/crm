import "./style.css";

export const FilterPanel = ({
  title,
  status = "approved",
  date = "",
  onStatusChange,
  onDateChange,
}) => {
  return (
    <div className="header-filter">
      <h2>{title}</h2>
      <div className="filters">
        <div className="field-filter">
          <label className="field-label" htmlFor="status">
            Status
          </label>
          <div className="select">
            <select
              id="status"
              value={status}
              onChange={(e) => onStatusChange?.(e.target.value)}
            >
              <option value="approved">Approved</option>
              <option value="disapproved">Disapproved</option>
              <option value="pending">Pending</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>

        <div className="field-filter">
          <label className="field-label" htmlFor="date">
            Date
          </label>
          <div className="select">
            <select
              id="date"
              value={date}
              onChange={(e) => onDateChange?.(e.target.value)}
            >
              <option value="">Selected Date</option>
              <option value="today">Today</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="custom">Custom…</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
