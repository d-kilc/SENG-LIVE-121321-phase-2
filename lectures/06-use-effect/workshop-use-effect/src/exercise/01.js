// ✅ on line 2, import the useEffect hook along with the useState hook
import { useState, useEffect } from "react";

function App() {
  const [pics, setPics] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(res => res.json())
      .then(data => {
        console.log("Data fetched!", data);
        // data is an object with a key of message, which has an array of images
        // data.message => Array
        setPics(data.message)
        setLoaded(true)
      });
  }, [])

  console.log("Component rendering");

  return (
    <div style={{ padding: "16px" }}>
      <h1>Dog Pics</h1>
      {loaded ? <DogPics pics={pics} /> : <h1>Loading...</h1>}
    </div>
  );
}

// 🚫 no need to touch the code for this component!

function DogPics({ pics }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {pics.map(pic => (
        <img
          key={pic}
          style={{ width: "100%" }}
          src={pic}
          alt="A random dog from the internet"
        />
      ))}
    </div>
  );
}

export default App;
