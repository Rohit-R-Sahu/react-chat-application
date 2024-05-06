import { useState } from "react";

const Message = (props) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(props.msg.likes);

  const likeHandler = () => {
    setLike(!like);
    if (!like) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div
      className={props.msg.sentBy == "me" ? "py-3 message me" : "py-3 message"}
    >
      <div className="messageInfo">
        <img src={props.msg.avatar} alt="" />
        <span className="md:text-[12px] text-[10px]">{props.msg.sentBy}</span>
      </div>
      <div className="messageContent ">
        <div className="txtMsg">
          <p className="text-[16px]">{props.msg.message}</p>
          <div>
            <button onClick={likeHandler} className="text-red-500">
              {like ? (
                <ion-icon name="heart"></ion-icon>
              ) : (
                <ion-icon name="heart-empty"></ion-icon>
              )}
            </button>
            <span className="text-[10px]">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
