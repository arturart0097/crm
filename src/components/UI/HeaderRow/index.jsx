import "./style.css";

export const HeaderRow = ({ labels = [] }) => {
  return (
    <div className="header-row">
      {labels.map((label, idx) => (
        <p key={`${label}-${idx}`}>{label}</p>
      ))}
    </div>
  );
};
