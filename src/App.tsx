import { useState } from "react";
// import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <Button onButtonClick={() => null}>click me</Button>
    </div>
  );
  // let citis = ["kankroli", "ahmedabad", "udaipur"];
  // return <ListGroup items={citis} heading="citis" onSelectItem={() => null} />;
  //   const [alertVisibility, setAlertVisibility] = useState(false);
  //   const handleButtonClick = (text: string) => {
  //     console.log(text);
  //   };
  //   return (
  //     <div>
  //       {alertVisibility && (
  //         <Alert
  //           onButtonPressed={() => {
  //             setAlertVisibility(false);
  //           }}
  //         >
  //           my alert
  //         </Alert>
  //       )}
  //       <Button
  //         buttonColor="primary"
  //         onButtonClick={() => {
  //           setAlertVisibility(true);
  //         }}
  //       >
  //         click me
  //       </Button>
  //     </div>
  //   );
}

export default App;
