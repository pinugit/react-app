import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface props {
  onClickLike: () => void;
}
const Like = ({ onClickLike }: props) => {
  const [likeState, setLikeState] = useState(true);
  const toggle = () => {
    setLikeState(!likeState);
    onClickLike();
  };
  let size = 30;
  if (likeState)
    return (
      <AiFillHeart
        color="#Ffc0cb"
        size={size}
        onClick={() => {
          toggle();
        }}
      />
    );
  return (
    <AiOutlineHeart
      size={size}
      onClick={() => {
        toggle();
      }}
    />
  );
};

export default Like;
