import { useState } from "react";

interface props {
  children: string;
  maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 100 }: props) => {
  const [doesShowingMore, setDoesShowingMore] = useState(false);
  return (
    <>
      <div>
        {doesShowingMore
          ? children + "      "
          : children.substring(0, maxChar) + "......."}
        <button
          onClick={() => {
            setDoesShowingMore(!doesShowingMore);
          }}
        >
          {doesShowingMore ? "show less" : "show more"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
