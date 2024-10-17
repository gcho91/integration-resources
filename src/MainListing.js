import Card from "./Card";
import style from "./MainListing.module.css";
import useFetch from "./hooks/useFetch";
import Filter from "./components/Filter/Filter";
import { useEffect } from "react";

function MainListing() {
  const { apiData, loading, error } = useFetch("/db/listings.json");

  useEffect(() => {
    console.log("apidata", apiData);
  }, [apiData]);

  return (
    <div>
      <h1>Organizations</h1>
      <p>Organizations that regularly host online integration circles </p>
      <Filter />
      <div className={style.row}>
        {loading && <span>Loading.....</span>}
        {error && !loading && <span>Error in fetching data ...</span>}
        {!loading && apiData && apiData.length > 0
          ? apiData.map((item, index) => <Card {...item} key={index} />)
          : !loading && <span>No data available</span>}
      </div>
    </div>
  );
}

export default MainListing;
