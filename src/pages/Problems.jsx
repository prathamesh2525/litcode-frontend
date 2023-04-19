import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const problems1 = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45.2%",
  },
  {
    id: "2",
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "34.2%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "34.2%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
  {
    id: "4",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "23.6%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
]

export const problems2 = [
  {
    id: "5",
    title: "3Sum",
    difficulty: "Easy",
    acceptance: "25.6%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
  {
    id: "6",
    title: "4Sum",
    difficulty: "Medium",
    acceptance: "16.2%",
    input: [1, 2, 3, 4, 5, 6, 6],
    output: 6,
  },
  {
    id: "7",
    title: "Longest Palindromic Substring",
    difficulty: "Hard",
    acceptance: "30.3%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
  {
    id: "8",
    title: "ZigZag Conversion",
    difficulty: "Easy",
    acceptance: "34.1%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
  },
]

export const Problems = () => {
  const [problems, setProblems] = useState(problems1)
  const navigate = useNavigate()

  function ProblemStatemant(problem) {
    const { title, difficulty, acceptance, id } = problem
    return (
      <div
        onClick={() => navigate(`${id}`)}
        key={problem.id}
        className="w-8/12 cursor-pointer flex justify-between m-2 p-4 text-left bg-slate-950 rounded-xl hover:opacity-80"
      >
        <p className="hover:text-blue-600">{title}</p>
        <p>{acceptance}</p>
        <p
          style={{
            color:
              difficulty === "Easy"
                ? "green"
                : difficulty === "Medium"
                ? "goldenrod"
                : "red",
          }}
        >
          {difficulty}
        </p>
      </div>
    )
  }
  return (
    <div className="bg-slate-900 h-auto text-white p-4">
      <div className="text-4xl">Problems</div>
      <div className="">
        <div className="flex space-x-4 my-4">
          <button
            className="px-4 py-2 bg-slate-950 rounded hover:opacity-80"
            onClick={() => setProblems(problems1)}
          >
            1
          </button>
          <button
            className="px-4 py-2 bg-slate-950 rounded hover:opacity-80"
            onClick={() => setProblems(problems2)}
          >
            2
          </button>
        </div>
        <div className="h-screen">
          <div className="flex flex-col justify-center items-center w-full">
            {problems.map((problem, index) => ProblemStatemant(problem))}
          </div>
        </div>
      </div>
    </div>
  )
}
