import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/store";
import { CounterContext } from "../context/CounterContext";

export default function Counter() {
  const reduxCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const {
    count,
    increment: contextIncrement,
    decrement: contextDecrement,
    reset: contextReset,
  } = useContext(CounterContext);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700">Counter App</h1>

      <div className="grid grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Redux Counter
          </h2>
          <p className="text-3xl font-bold text-blue-600">{reduxCount}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Context API Counter
          </h2>
          <p className="text-3xl font-bold text-purple-600">{count}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={contextIncrement}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Increment
            </button>
            <button
              onClick={contextDecrement}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={contextReset}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
