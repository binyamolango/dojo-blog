import { useState } from "react";

const Home = () => {
  const [ name, setName ] = useState('Binyam');
  const handleClick = () => {
    setName('Micky');
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;