// Modal.js
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal-root") // This is the target container for the portal
  );
};

export default Modal;
