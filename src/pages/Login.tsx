import { useState } from "react";
import { useLoginMutation } from "../features/slice/extended/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, error, isLoading, isError }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password }).unwrap();
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-2">
                <img
                  className="block mx-auto mb-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qYi3Ou4YrLzvoDJjiUHLjCmianjvx1nTvQ&s"
                  alt="Profile"
                  width="350"
                  height="350"
                />
                <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs mt-8">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={isLoading}
                  >
                    <span className="ml-1">
                      {isLoading ? "Loading..." : "Submit"}
                    </span>
                  </button>
                  {error && (
                    <p className="mt-3 text-red-500 text-sm">
                      {error.data?.message || "An error occurred"}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`,
                backgroundSize: "cover",
                height: "50vh",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
