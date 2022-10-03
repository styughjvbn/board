import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        console.log(res);
        return res.text();
      })
      .then((data) => {
        setMessage(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
