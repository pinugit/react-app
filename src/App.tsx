// import { useState } from "react";
// // import ListGroup from "./Components/ListGroup";
// import Button from "./Components/Button";
// import Like from "./Components/Like";
import ExpandableText from "./Components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText maxChar={100}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At itaque
        quisquam ipsam animi, corrupti voluptate ullam odio harum explicabo
        dignissimos cumque provident rem distinctio tempore doloribus quos ab
        mollitia illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet in ullam cum ipsum dolorum, voluptatem et! Sequi aperiam
        nesciunt alias eveniet quas quidem! Doloribus temporibus cupiditate
        porro qui sed facilis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Doloribus quam odit, tenetur corporis provident
        recusandae id eum corrupti dicta possimus eaque hic assumenda. Illum
        quidem doloremque totam explicabo cumque eos!
      </ExpandableText>
    </div>
  );

  // const handleClick = () => {
  //   console.log("clicked");
  // };
  // return (
  //   <div>
  //     <Like
  //       onClickLike={() => {
  //         handleClick();
  //       }}
  //     />
  //     {/* <Button onButtonClick={() => null}>click me</Button> */}
  //   </div>
  // );
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
