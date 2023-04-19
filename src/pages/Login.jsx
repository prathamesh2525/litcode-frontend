import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col justify-center items-center space-y-12 ">
      <div className="flex text-6xl ">
        <div>🔥</div>
        <div className="font-extrabold animate-text bg-gradient-to-r from-teal-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back to LitCode
        </div>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div className="flex flex-col space-y-4">
          <input className="p-2 rounded" type="email" placeholder="Email" />
          <input
            className="p-2 rounded"
            type="password"
            placeholder="Password"
          />
        </div>
        <Link
          onClick={() => console.log("Clicked")}
          to={"/problems"}
          className="px-4 py-2 bg-slate-950 hover:opacity-75 rounded text-center  font-bold"
        >
          Sign in
        </Link>
        <Link
          className="text-right hover:underline font-normal"
          to={"signup"}
          children="Sign Up"
        />
      </div>
    </div>
  )
}
