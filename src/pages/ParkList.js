import { Link } from "react-router-dom";

function Parks() {
  return (
    <main>
      <Link to="/parks/123">Go to Single Park</Link>
      <p>I am the parks page</p>
    </main>
  );
}

export default Parks;
