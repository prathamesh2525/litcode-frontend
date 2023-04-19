import { Link } from "react-router-dom"

export const Signup = () => {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col space-y-12 justify-center items-center">
      <div className="flex text-6xl ">
        <div>🔥</div>
        <div className="font-extrabold animate-text bg-gradient-to-r from-teal-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to LitCode
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <input className="p-2 rounded" type="email" placeholder="email" />
          <input
            className="p-2 rounded"
            type="password"
            placeholder="password"
          />
        </div>
        <Link
          to={"/problems"}
          className="px-4 py-2 bg-slate-950 hover:opacity-75 font-bold rounded text-center"
        >
          Sign Up
        </Link>
        <Link to={"/"} className="text-right hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  )
}
