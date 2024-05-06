import Messages from "./Messages";

import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello",
      sentBy: "Alice",
      avatar:
        "https://img.etimg.com/thumb/width-1600,height-900,imgsize-62528,resizemode-75,msid-89917362/magazines/panache/desi-girl-vibes-suhana-khan-is-a-vision-in-manish-malhotras-white-chikankari-lehenga.jpg",
      likes: 4,
    },
    {
      message: "Yup Good morning",
      sentBy: "Bob",
      avatar:
        "https://static.displate.com/270x380/displate/2022-03-15/5d0f02a20869a3ed83e4bfeb9716fc2e_de22bebef32f962e4c4bb718d3501472.jpg",
      likes: 2,
    },
    {
      message: "Hey Good morning",
      sentBy: "Patrick",
      avatar:
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp",
      likes: 1,
    },
  ]);
  const [msg, setMsg] = useState({});

  const inputHandler = (e) => {
    setMsg({
      message: e.target.value,
      sentBy: "me",
      avatar: "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png",
      likes: 0,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // let textMsg = e.target[0].value;
    if (e.target[0].value) {
      setMsg({
        message: e.target[0].value,
        sentBy: "me",
        avatar:
          "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png",
        likes: 0,
      });
      setMessages([...messages, msg]);
    }

    e.target[0].value = null;
  };

  return (
    <div className="flex flex-col h-[100%]">
      <div className="h-[60px] bg-slate-400 px-5 py-2 flex items-center justify-between flex-[0.1] text-[20px]">
        <div className="font-semibold">Group 1</div>
        <div className="text-[20px] flex gap-4">
          <button>
            <ion-icon name="trash"></ion-icon>
          </button>
          <button className="hidden">
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
      </div>
      <div className="bg-[#eef3fa] flex-[1] scroll-y-dir px-5">
        <Messages grpMsg={messages} />
      </div>
      <div className="flex-[0.1]">
        <div className="h-full py-2">
          <form
            onSubmit={submitHandler}
            className="flex items-center px-5 justify-between"
          >
            <input
              type="text"
              className="w-full outline-none border-none  text-[18px] placeholder:text-slate-500"
              placeholder="Enter your message..."
              onChange={inputHandler}
            />
            <button className="px-5 py-2 bg-blue-400 rounded-md" type="submit">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
