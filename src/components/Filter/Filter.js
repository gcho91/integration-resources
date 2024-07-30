import style from "../Filter/Filter.module.css";
import { useEffect, useState } from "react";
function Filter() {
  const [selectedFilter, setSelectedFilter] = useState("");

  let filters = ["Online", "Online/Zoom", "Filter 3", "Filter 4"];

  const handleFilterSelect = (selected) => {
    console.log(selected, "selected");
    setSelectedFilter(selected);
  };

  useEffect(() => {
    console.log("filter changed", selectedFilter);
  }, [selectedFilter]);

  return (
    <div>
      <h3>Filter - location</h3>

      <ul className={style.list}>
        {filters.map((filter) => {
          return (
            <li key={filter}>
              <button
                onClick={() => handleFilterSelect(filter)}
                className={style.filterButton}
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
