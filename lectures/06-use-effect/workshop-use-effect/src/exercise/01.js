// ✅ on line 2, import the useEffect hook along with the useState hook
import { useState, useEffect } from "react";

function App() {
  const [pics, setPics] = useState([]);
<<<<<<< HEAD
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
=======
  const [status, setStatus] = useState("pending");

  // ✅ call the useEffect hook with a callback function and an empty array as a second argument
  
  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://dog.ceo/api/breeds/image/random/8")
    .then(res => res.json())
    .then(data => {
      console.log("Data fetched!", data);
      // data is an object with a key of message, which has an array of images
      // data.message => Array
      setPics(data.message);
      // setStatus("success");
    });
  }, []);

  // ✅ take all the code out from the handleFetchClick function, and put it inside the callback function in your useEffect
  // 📃 Check out the docs for an example: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state

  // 🗑 once your useEffect hook works, delete this function and also delete the <button> from the JSX
>>>>>>> main

  console.log("Component rendering");

  if (pics.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{ padding: "16px" }}>
      
      <h1>Dog Pics</h1>
<<<<<<< HEAD
      {loaded ? <DogPics pics={pics} /> : <h1>Loading...</h1>}
=======
      <DogPics pics={pics} />
>>>>>>> main
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
