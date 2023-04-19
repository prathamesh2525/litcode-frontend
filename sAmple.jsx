import React from "react"

export const sAmple = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-2xl">
          {id}. {title}
        </div>
        <div
          className={
            difficulty === "Easy"
              ? "bg-green-500 py-2 px-4 text-center rounded"
              : difficulty === "Medium"
              ? "bg-yellow-500  py-2 px-4 text-center rounded"
              : "bg-red-600 py-2 px-4 text-center rounded"
          }
        >
          {difficulty}
        </div>
      </div>
      <div className="text-lg">Acceptance Rate: {acceptance}</div>
      <div className="w-full flex">
        <div className="w-1/2 flex justify-between mt-4 m-1 bg-slate-950 p-4 rounded-md">
          <p className="text-lg">Input: [ {input && input.join(" , ")} ]</p>
          <div className="text-lg">Output: {output}</div>
        </div>
        <div className="w-1/2 h-[80vh] bg-slate-950 mt-4 p-8 m-1">
          <div className="p-4 bg-slate-900 h-full w-full rounded">
            <form>
              <select
                className="bg-slate-950 p-2"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {languages.map((value) => (
                  <option className="bg-slate-950" value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </form>

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
              className="border-none p-4 w-full h-[560px] bg-slate-950 mt-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
