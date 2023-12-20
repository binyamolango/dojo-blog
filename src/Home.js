import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [ blogs, setBlogs ] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:8080/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }

  useEffect(fetchData, []);

  const handleDelete = (blog_id) => {
    setBlogs(blogs.filter(blog => blog.id !== blog_id))
  }

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>}
    </div>
  );
}

export default Home;