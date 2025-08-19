import "./style.css";

export const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  errors,
  img = "",
  style,
}) => {
  return (
    <div className="input-container">
      <img src={img} alt="email" />
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={errors ? "error" : ""}
        style={style}
      />
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
};
