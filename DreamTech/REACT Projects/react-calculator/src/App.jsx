import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => setResult(result.concat(e.target.id));

  const clear = () => setResult("");

  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      let sanitizedResult = result.replace(/(^0+)(\d)/, "$2");
      sanitizedResult = sanitizedResult.replace(/([+\-*/])0+/g, "$1");
      const resultValue = evaluate(sanitizedResult);
      setResult(resultValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    {
      id: "AC",
      value: "AC",
      action: clear,
      style: "bg-red-500 hover:bg-red-400",
    },
    {
      id: "DE",
      value: "DE",
      action: deleteEl,
      style: "bg-red-500 hover:bg-red-400",
    },
    {
      id: ".",
      value: ".",
      action: handleClick,
      style: "bg-gray-700 hover:bg-gray-600",
    },
    {
      id: "/",
      value: "/",
      action: handleClick,
      style: "bg-orange-500 hover:bg-orange-400",
    },
    {
      id: "7",
      value: "7",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "8",
      value: "8",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "9",
      value: "9",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "*",
      value: "*",
      action: handleClick,
      style: "bg-orange-500 hover:bg-orange-400",
    },
    {
      id: "4",
      value: "4",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "5",
      value: "5",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "6",
      value: "6",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "-",
      value: "-",
      action: handleClick,
      style: "bg-orange-500 hover:bg-orange-400",
    },
    {
      id: "1",
      value: "1",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "2",
      value: "2",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "3",
      value: "3",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "+",
      value: "+",
      action: handleClick,
      style: "bg-orange-500 hover:bg-orange-400",
    },
    {
      id: "00",
      value: "00",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "0",
      value: "0",
      action: handleClick,
      style: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: "=",
      value: "=",
      action: calculate,
      style: "bg-blue-500 hover:bg-blue-400 col-span-2",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400">
      <div className="bg-gray-900 rounded-lg shadow-xl w-80 p-6">
        <input
          type="text"
          value={result}
          disabled
          className="w-full text-right text-2xl p-4 mb-4 bg-gray-700 text-white rounded-md"
        />

        <div className="grid grid-cols-4 gap-4">
          {buttons.map(({ id, value, action, style }, index) => (
            <button
              key={index}
              id={id}
              className={`text-white p-4 rounded-md ${style}`}
              onClick={action}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
