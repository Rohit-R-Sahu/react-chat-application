const Search = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#214485] text-white">
      <div className="flex items-center px-6">
        <input
          className="h-[40px] flex-[1] bg-transparent px-2 outline-none place-content-center placeholder:text-[#ecedf0]"
          placeholder="Find a user.."
        />
        <button className="px-2 pt-1 text-[20px]">
          <ion-icon name="search"></ion-icon>
        </button>
      </div>
      {/* <div className="userChat px-5">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="user"
        ></img>
        <div className="userChatInfo">
          <span className="font-bold">User</span>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
