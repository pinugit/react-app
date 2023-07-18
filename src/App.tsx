import Button from "./Button";
function App() {
  let citis = ["kankroli", "ahmedabad", "udaipur"];

  const handleButtonClick = (text: string) => {
    console.log(text);
  };
  return (
    <div>
      <Button buttonText="Click Me" onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
