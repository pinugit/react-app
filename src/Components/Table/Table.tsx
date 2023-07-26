import { useState } from "react";

interface Item {
  description: any;
  amount: any;
  category: any;
}

interface props {
  items: Item[];
  onClickDelete: (item: Item) => void;
}
const Table = ({ items, onClickDelete }: props) => {
  const [whichCategory, setWhichCategory] = useState("");
  console.log(whichCategory);

  const sortedItems =
    whichCategory === "" || whichCategory === "all"
      ? items
      : items.filter((item) => item.category === whichCategory);
  console.log(sortedItems);

  return (
    <>
      <select
        onChange={(event) => {
          setWhichCategory(event.target.value);
          console.log(whichCategory);
        }}
        className="mb-3 form-select"
        aria-label="Default select example"
      >
        <option defaultValue={"all"} value="all">
          All
        </option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <table className="mu-10 table table-striped table-bordered ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => onClickDelete(item)}
                  type="button"
                  className="btn btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
