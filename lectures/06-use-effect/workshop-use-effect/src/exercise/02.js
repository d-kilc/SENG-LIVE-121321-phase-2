import { useState, useEffect } from "react";

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(localStorage.getItem("text") || "");
<<<<<<< HEAD
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    console.log("Running side effect")
    localStorage.setItem("text", text )
  }, [text])
=======
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")) || 0);

  console.log(text);

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    
    // { text: "" }
    // { text: "a" }
    // { text: "ab" }
    // { text: "abc" }
    // { text: "abcd" }
    localStorage.setItem("text", text);
    localStorage.setItem("count", count);
    console.log("Running side effect");
  }, [text, count]);
>>>>>>> main
  // ✅ use the dependencies array so that the side effect only runs if the text changes

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
