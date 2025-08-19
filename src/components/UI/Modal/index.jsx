import "./style.css";

export const Modal = ({
  isOpen,
  close,
  children,
  onBackdropClickClose = true,
  className = "",
}) => {
  if (!isOpen) return null;

  function handleOverlayClick() {
    if (onBackdropClickClose) close?.();
  }

  function handleContainerClick(e) {
    e.stopPropagation();
  }

  return (
    <div className={`modal-overlay ${className}`} onClick={handleOverlayClick}>
      <div className="modal-container" onClick={handleContainerClick}>
        {children}
      </div>
    </div>
  );
};
