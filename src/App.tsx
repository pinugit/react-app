import { useState } from "react";
// import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";
import Like from "./Components/Like";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Like
        onClickLike={() => {
          handleClick();
        }}
      />
      {/* <Button onButtonClick={() => null}>click me</Button> */}
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
