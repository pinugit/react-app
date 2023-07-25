import Table from "./Components/Table/Table";
import TheForm from "./Components/TheForm/TheForm";
interface items {
  discription: any;
  amount: any;
  catagory: any;
}
let itemList: items[] = [];
function App() {
  return (
    <div>
      <TheForm
        onSutbmitPassDict={(dict) => {
          itemList.push(dict);
          console.log(dict);
          console.log(itemList);
          <Table items={itemList} />;
        }}
      />
    </div>
  );
}
export default App;
