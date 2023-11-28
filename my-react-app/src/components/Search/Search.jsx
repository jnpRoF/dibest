import Button from "../Button/Button"
import { useState,useEffect } from "react";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

   
  };

  return (
    <div className="flex justify-center space-x-3 mt-10 mb-10">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search name of vendor"
        className="border px-6 w-[25%] rounded-xl"
        onChange={handleSearchChange}
      />
      <Button
        className="rounded-2xl text-xl bg-gold font-bold text-white px-14 py-3"
        children="Search"
      />
    </div>
  );
};

export default Search