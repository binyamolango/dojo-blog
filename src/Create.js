import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Blog body:</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>

        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button type="submit">Add Blog</button>
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
}
 
export default Create;