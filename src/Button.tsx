import { useState } from "react";

interface props {
  buttonText: string;
  onButtonClick: (text: string) => void;
}
function Button({ buttonText, onButtonClick }: props) {
  const [clickedState, setClickedState] = useState(0);
  return (
    <button
      className={clickedState == 0 ? "btn btn-primary" : "btn btn-success"}
      onClick={() => {
        clickedState == 0 ? setClickedState(1) : setClickedState(0);
        onButtonClick(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
}

export default Button;
