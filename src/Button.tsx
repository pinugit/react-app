import { ReactNode, useState } from "react";

interface props {
  children: string;
  buttonColor?: "primary" | "secondary" | "danger" | "close";
  onButtonClick: () => void;
}
function Button({ children, buttonColor = "primary", onButtonClick }: props) {
  const [clickedState, setClickedState] = useState(0);
  return (
    <button
      className={"btn btn-" + buttonColor}
      onClick={() => {
        onButtonClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
