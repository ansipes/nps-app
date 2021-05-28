import { Link, useParams } from "react-router-dom";

function ParkSingle() {
  const { id } = useParams();

  return (
    <main>
      <Link to="/parks">Go to Parks</Link>
      <p>I am the single park page for the park with the id of: {id}</p>
    </main>
  );
}

export default ParkSingle;
