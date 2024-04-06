import React from "react";
import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSeachForm } from "@/components/SearchForm";

const SearchForm = () => {
  const { fieldKeyWord, fieldGeneration, fieldType, fieldSort } =
    useSeachForm();
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Generations
        </label>
        <select
          {...fieldGeneration}
          id="generation"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {generationList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`genetation-key-${index}`}
                value={index}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-mb font-medium text-white"
        >
          Types
        </label>
        <select
          {...fieldType}
          id="type"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {typesList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2 text-mb font-medium text-white"
        >
          Sort By
        </label>
        <select
          {...fieldSort}
          id="sort"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {sortList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`sort-key-${index}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Search
        </label>
        <input
          {...fieldKeyWord}
          id="generation"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        />
      </div>
    </form>
  );
};

export default SearchForm;
