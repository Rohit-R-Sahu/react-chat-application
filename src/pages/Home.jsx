import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="container-fluid flex items-center justify-center">
      <div className="w-[100%] md:container flex h-[90vh] rounded-2xl overflow-hidden">
        <div className="w-[30%]  bg-[#CADCFC] scroll-y-dir">
          <Sidebar />
        </div>
        <div className="w-[70%]">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
