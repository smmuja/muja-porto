import { Input } from "components";
import { Icon, IconProps, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

import { navPath } from "config";
import { Link } from "react-router-dom";

type ResultProps = {
  lable: string;
  path: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
};

export function SearchBar() {
  const [search, setSearch] = useState(false);

  const [query, setQuery] = useState("");

  const [result, setResult] = useState<ResultProps[]>([]);

  console.log(
    navPath.filter((item) => item.title.toLowerCase().includes("query"))
  );

  const searchHandler = () => {
    setSearch((prev) => !prev);
  };

  const results: any[] = navPath.filter((item) => {
    return item && item.title && item.title.toLowerCase().includes(query);
  });

  console.log(results);

  const handleChange = (query: string) => {
    setQuery(query);
    setResult(results);

    if (query.length < 1) {
      setResult([]);
    }
  };

  const handleClearResult = () => {
    setResult([]);
    setQuery("");
  };

  return (
    <div className="my-3 bg-white border-0 rounded-md">
      <div>
        <Input
          type="search"
          placeholder="Search section ..."
          value={query}
          inputClassName="text-black px-2"
          rightNode={search ? <IconSearch /> : <IconSearch />}
          rightNodeClick={searchHandler}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      {result && result.length > 0 && (
        <div className="mt- bg-transparent">
          <ul
            onClick={handleClearResult}
            className="px-3 list-none bg-white rounded-md gap-3 "
          >
            {navPath
              .filter((item) => item.title.toLowerCase().includes(query))
              .map((item) => (
                <li key={item.title}>
                  <div className="flex gap-1 my-3 hover:bg-slate-300 rounded-md mx-0">
                    {<item.icon />}
                    <Link to={item.path}>{item.title}</Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
