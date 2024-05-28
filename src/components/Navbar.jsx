import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#00246B] h-20 p-6 text-white flex justify-between items-center">
      <div className="font-semibold">Welcome User...</div>
      <Link to="/">
        <button className="bg-none px-2 pt-1 rounded-sm duration-700 text-white hover:bg-red-500">
          <ion-icon name="power"></ion-icon>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
