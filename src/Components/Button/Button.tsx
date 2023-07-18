import { ReactNode, useState } from "react";
import styled from "./Button.module.css";

interface props {
  children: string;
  onButtonClick: () => void;
}
function Button({ children, onButtonClick }: props) {
  const [clickedState, setClickedState] = useState(0);
  return (
    <button
      className={styled.ButtonStyle}
      onClick={() => {
        onButtonClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
