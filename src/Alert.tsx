import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onButtonPressed: () => void;
}
const Alert = ({ children, onButtonPressed }: props) => {
  return (
    <div className="alert alert-primary  alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onButtonPressed}
      ></button>
    </div>
  );
};

export default Alert;
