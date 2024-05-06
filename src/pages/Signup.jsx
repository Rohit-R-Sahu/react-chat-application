import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  // const [err, setErr] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p className="">
                Already have an account? &nbsp;
                <Link
                  to="/signin"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form
              onSubmit={formHandler}
              className="space-y-5"
              encType="multipart/form-data"
            >
              <div>
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  autoComplete="on"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  required
                  id="userImg"
                  onChange={(e) => setAvatar(e.target.value)}
                />
                <label
                  htmlFor="userImg"
                  className="font-medium text-[32px] flex items-center gap-2 cursor-pointer"
                >
                  <ion-icon name="images"></ion-icon>
                  <span className="text-sm">Add an avatar</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                <Link to="/signin">Create account</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
