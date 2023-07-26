import { useState } from "react";
import Table from "./Components/Table/Table";
import TheForm from "./Components/TheForm/TheForm";
type Item = {
  discription: any;
  amount: any;
  catagory: any;
};
function App() {
  const [listItems, setListItems] = useState<Item[]>([]);
  return (
    <div>
      <TheForm
        onSutbmitPassDict={(dict) => {
          setListItems([...listItems, dict]);
        }}
      />
      <Table
        items={listItems}
        onClickDelete={(index) => {
          let updatedItems = [...listItems];
          updatedItems.splice(index, 1);
          setListItems(updatedItems);
        }}
      />
    </div>
  );
}
export default App;
