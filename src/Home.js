import { useState } from "react";

const Home = () => {
  const [ name, setName ] = useState('Binyam');
  const [ age, setAge ] = useState(25);
  const handleClick = () => {
    setName('Micky');
    setAge(28);
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;