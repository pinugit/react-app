import { useEffect, useState } from "react";
import Table from "./Components/Table/Table";
import TheForm from "./Components/TheForm/TheForm";
import axios from "axios";
// type Item = {
//   description: any;
//   amount: any;
// category: any;
// };
interface data {
  id: number;
  name: string;
}
function App() {
  const [names, setNames] = useState<data[]>([]);
  // const [listItems, setListItems] = useState<Item[]>([]);
  useEffect(() => {
    axios
      .get<data[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setNames(res.data));
    console.log(names);
  }, []);

  return (
    <ul>
      {names.map((name) => (
        <li key={name.id}>{name.name}</li>
      ))}
    </ul>
  );

  // <div>
  //   <TheForm
  //     onSubmitPassDict={(dict) => {
  //       setListItems([...listItems, dict]);
  //     }}
  //   />
  //   <Table
  //     items={listItems}
  //     onClickDelete={(item) => {
  //       let updatedItems = [...listItems];
  //       updatedItems.splice(updatedItems.indexOf(item), 1);
  //       setListItems(updatedItems);
  //     }}
  //   />
  // </div>
}
export default App;
