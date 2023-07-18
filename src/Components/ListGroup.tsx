import { useState } from "react";
interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* this is a control flow statement which will return p if true or null if false  */}
      {/* {GetMessage()} */}
      {items.length == 0 && <p>No items found </p>}
      <ol className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
            key={items}
          >
            {items}
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListGroup;
