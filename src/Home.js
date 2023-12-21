import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8080/blogs');

  return (
    <div className="home">
      {isPending && <>loading...</>}
      {error && <>{error}</>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}

export default Home;