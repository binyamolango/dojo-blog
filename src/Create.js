const Create = () => {
  return (
    <div className="create">
      <form>
        <label htmlFor="title">Blog title:</label>
        <input
          type="text"
          id="title"
        />

        <label htmlFor="body">Blog body:</label>
        <textarea
          name="body"
          id="body"
        >
        </textarea>

        <select
          name="author"
          id="author"
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;