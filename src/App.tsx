import { useState } from "react";
import Table from "./Components/Table/Table";
import TheForm from "./Components/TheForm/TheForm";
type Item = {
  description: any;
  amount: any;
  category: any;
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
        onClickDelete={(item) => {
          let updatedItems = [...listItems];
          updatedItems.splice(updatedItems.indexOf(item), 1);
          setListItems(updatedItems);
        }}
      />
    </div>
  );
}
export default App;
