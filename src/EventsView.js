import { useParams } from "react-router-dom";

function EventsView() {
  const { id } = useParams();

  return (
    <div>
      {/* {id ? (
        <h1>The name in the query string is {id}</h1>
      ) : (
        <h1>There is no query string </h1>
      )} */}
      <h1>ID: {id}</h1>
    </div>
  );
}

export default EventsView;
// template accepts routing with listings props data
// pull all individual events from the org routing

// show this page when clicking on org name from main page
