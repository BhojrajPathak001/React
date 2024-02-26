import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <a href="/products">all products</a>
        <Link to='/products'>prouducts</Link>
      </div>
    </>
  );
}
