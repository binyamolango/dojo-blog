import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [ blogs, setBlogs ] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:8080/blogs')
      .then(response => {
        if (!response.ok) {
          throw Error("Error! Couldn't fetch the data")
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
  }

  useEffect(fetchData, []);

  return (
    <div className="home">
      {isPending && <>loading...</>}
      {error && <>{error}</>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}

export default Home;