import React from "react";

const Results = () => {
  return (
    <div className="w-[75%] mx-auto">
      <div class="flex justify-between mb-1 my-5">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Daily Goal
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div class="bg-blue-600 h-4 rounded-full w-[40%]"></div>
      </div>

      <div class="flex justify-between mb-1 my-5">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Weekly Goal
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div class="bg-blue-600 h-4 rounded-full w-[40%]"></div>
      </div>

      <div class="flex justify-between mb-1 my-5">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Monthly Goal
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div class="bg-blue-600 h-4 rounded-full w-[40%]"></div>
      </div>

      <div class="flex justify-between mb-1 my-5">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Yearly Goal
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          75%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div class="bg-blue-600 h-4 rounded-full w-[75%]"></div>
      </div>
    </div>
  );
};

export default Results;
