import React, {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import {BiTask} from 'react-icons/bi'

const FloatingButton = () => {
  const [fab, setFab] = useState(false);

  const handleFab = () => {
    setFab(!fab);
  };

  return (
    <div>
      <div data-dial-init className="fixed right-6 bottom-6 group">
        <div
          id="speed-dial-menu-default"
          className="flex flex-col items-center mb-4 space-y-2"
        >
          {fab ? (
            <>
              <button
                type="button"
                data-tooltip-target="tooltip-share"
                data-tooltip-placement="left"
                className="flex justify-center items-center w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              >
                <BiTask size={23}/>
                <span className="sr-only">Task</span>
              </button>
              <div
                id="tooltip-share"
                role="tooltip"
                className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Task
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-print"
                data-tooltip-placement="left"
                className="flex justify-center items-center w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
                  <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
                </svg>
                <span className="sr-only">Print</span>
              </button>
              <div
                id="tooltip-print"
                role="tooltip"
                className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Print
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              
            </>
          ) : (
            ""
          )}
        </div>
        <button
          onClick={handleFab}
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex items-center justify-center text-white bg-blue-700 rounded-full w-10 h-10 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <AiOutlinePlus size={23}/>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;
