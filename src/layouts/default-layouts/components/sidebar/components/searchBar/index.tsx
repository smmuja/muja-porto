import { Input } from "components";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export function SearchBar() {
  const [search, setSeacrh] = useState(false);

  const searchHandler = () => {
    setSeacrh((prev) => !prev);
  };

  return (
    <div className="my-3 bg-white border-0 rounded-md">
      <Input
        type="search"
        placeholder="Search ..."
        inputClassName="text-black px-2"
        rightNode={search ? <IconSearch /> : <IconSearch />}
        rightNodeClick={searchHandler}
      />
    </div>
  );
}
