import { useParams } from "react-router-dom"
import { problems1, problems2 } from "./Problems"
import { useState } from "react"
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdAlarm,
  MdKeyboardArrowUp,
} from "react-icons/md"
import { GiHamburgerMenu, GiMeditation } from "react-icons/gi"
import { AiOutlineFire, AiOutlineSetting } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { BsBookmark, BsArrowsAngleExpand } from "react-icons/bs"
import { BiCodeCurly, BiStar } from "react-icons/bi"
import { IoMdRefresh } from "react-icons/io"
import { VscDebug } from "react-icons/vsc"
import { TbDotsCircleHorizontal } from "react-icons/tb"
import { GoThumbsup, GoThumbsdown } from "react-icons/go"
import { CiStar } from "react-icons/ci"
import { RiShareCircleFill } from "react-icons/ri"

export const Problem = () => {
  const { id } = useParams()
  return (
    <div className="h-screen text-white">
      {id < 5 ? (
        <ListProblem pid={id} problem={problems1} />
      ) : (
        <ListProblem pid={id} problem={problems2} />
      )}
    </div>
  )
}

/*
id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45.2%",
    input: [-43, 5, 3, 2, 7, 9],
    output: 7,
*/

const languages = ["C", "C++", "C#", "Java", "JavaScript", "Python"]

const ListProblem = ({ pid, problem }) => {
  const [selected, setSelected] = useState(languages[0])
  const displayProblem = problem.find((problem) => problem.id === pid)
  const { id, title, difficulty, acceptance, input, output } = displayProblem
  return (
    <div className="h-screen">
      <header className="w-full flex justify-between items-center p-2 px-6 bg-slate-900">
        <div className="flex justify-center items-center">🔥 LitCode</div>
        <div className="flex justify-between w-52 items-center">
          <button className="text-3xl bg-slate-800 rounded">
            <MdKeyboardArrowLeft />
          </button>
          <button>
            <GiHamburgerMenu />
          </button>
          <h1>Problem List</h1>
          <button className="text-3xl bg-slate-800 rounded">
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="flex justify-between items-center w-52">
          <button className="px-3 py-1 rounded-lg text-sm text-yellow-500 bg-slate-800">
            Premium
          </button>
          <button className="text-2xl text-slate-500">
            <MdAlarm />
          </button>
          <button className="text-2xl text-slate-500">
            <AiOutlineFire />
          </button>
          <button className="text-2xl text-slate-500">
            <CgProfile />
          </button>
        </div>
      </header>
      <header className="w-full flex justify-between items-center p-2 px-6 bg-slate-950 space-x-8">
        <div className="flex justify-start items-center space-x-4 lg:space-x-8 text-xs w-1/2">
          <button className="bg-slate-900 p-3 rounded">Description</button>
          <button className=" p-3 rounded active:bg-slate-900">
            Editorial
          </button>
          <button className=" p-3 rounded active:bg-slate-900">
            Solutions(3.2k)
          </button>
          <button className=" p-3 rounded active:bg-slate-900">
            Submissions
          </button>
        </div>
        <div className="w-1/2 flex justify-between items-center">
          <form>
            <select
              className="bg-slate-900 p-2"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {languages.map((value) => (
                <option className="bg-slate-900" value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </form>
          <div className="flex justify-center items-center space-x-4 lg:space-x-6 text-lg text-slate-500 transition-all ">
            <BsBookmark
              size={14}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
            <BiCodeCurly
              size={18}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
            <GiMeditation
              size={18}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
            <AiOutlineSetting
              size={18}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
            <IoMdRefresh
              size={18}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
            <BsArrowsAngleExpand
              size={16}
              className="cursor-pointer hover:text-slate-300 duration-200"
            />
          </div>
        </div>
      </header>
      <div className="flex justify-center space-x-2 bg-slate-950 h-[89vh]">
        <div className="w-1/2 bg-slate-900 flex flex-col h-full p-2 lg:p-4">
          <div className="flex justify-between">
            <h1 className="text-lg lg:text-xl">
              {id}. {title}
            </h1>
            <div className="flex justify-center items-center space-x-2 text-md text-slate-500 lg:space-x-4">
              <h1>Hint</h1>
              <TbDotsCircleHorizontal />
            </div>
          </div>
          <div className="flex justify-start items-center space-x-4 lg:space-x-6 mt-2">
            <div
              className={
                difficulty === "Easy"
                  ? "bg-green-500 bg-opacity-20 py-1 px-4 text-center rounded-full text-xs"
                  : difficulty === "Medium"
                  ? "bg-yellow-500 bg-opacity-20 text-yellow-500  py-1 px-4 text-center rounded-full text-xs"
                  : "bg-red-600 bg-opacity-20 py-1 px-4 text-center rounded-full text-xs"
              }
            >
              {difficulty}
            </div>
            <button className="flex items-center text-sm hover:bg-slate-700 px-2 py-1 rounded">
              <GoThumbsup className="mr-2" />
              25.4k
            </button>
            <button className="flex items-center text-sm hover:bg-slate-700 px-2 py-1 rounded">
              <GoThumbsdown className="mr-2" />
              4.9k
            </button>
            <button className="text-xl hover:bg-slate-700 px-2 py-1 rounded">
              <CiStar />
            </button>
            <button className="text-md hover:bg-slate-700 px-2 py-1 rounded">
              <RiShareCircleFill />
            </button>
          </div>

          <div></div>
        </div>
        <div className="w-1/2 bg-slate-900">
          <textarea
            placeholder={`#include <stdio.h>
int main()
{
   /* printf function displays the content that is
    * passed between the double quotes.
    */
   printf("Hello World");
   return 0;
}`}
            className="border-none p-4 w-full h-[93%] bg-slate-900"
          ></textarea>
          <div className="h-[7%] bg-slate-900 flex justify-between items-center px-4">
            <button className=" px-4 py-2 rounded-xl bg-slate-700 flex items-center">
              Console <MdKeyboardArrowUp className="ml-1" />
            </button>
            <div className="flex justify-end items-center space-x-5">
              <VscDebug className="text-xl text-slate-500" />
              <button className=" px-4 py-2 rounded-xl bg-slate-700 flex items-center">
                Run
              </button>
              <button className=" px-4 py-2 rounded-xl bg-green-700 flex items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
