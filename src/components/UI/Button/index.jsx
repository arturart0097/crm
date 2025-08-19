import "./style.css";

export const Button = ({ children, type = "button", cls, style, onClick }) => {
  return (
    <button
      type={type}
      className={`customButton ${cls}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
