import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  function handleClick2() {
    alert("btn 2 clicked");
  }
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends />
      <Users />
      <Team />
      <Counter />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => alert("btn3 clicked")}>Click3</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
