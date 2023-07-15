import ListGroup from "./Components/ListGroup";

function App() {
  let citis = ["kankroli", "ahmedabad", "udaipur"];
  return (
    <div>
      <ListGroup items={citis} heading="city" />
    </div>
  );
}

export default App;
