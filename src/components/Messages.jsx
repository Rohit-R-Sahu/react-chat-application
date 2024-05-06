import Message from "./Message";

const Messages = (props) => {
  return (
    <div className="py-2">
      {props.grpMsg.map((msg, i) => (
        <Message msg={msg} key={i} />
      ))}
    </div>
  );
};

export default Messages;
