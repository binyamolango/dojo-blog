const Home = () => {
  const handleClick = (name, e) => {
    console.log(`Hello, You clicked me!, I am ${name}`);
    console.log(e.target)
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={(e) => { handleClick("Binyam", e) }}>Click me</button>
    </div>
  );
}

export default Home;