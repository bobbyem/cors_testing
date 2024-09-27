import "./App.css";
import { useState } from "react";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const URL = "http://localhost:3000";

  const testFetch = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) throw new Error("HTTP error: " + response.status);

      const data = await response.json();

      console.log(data);
      if (data) {
        setMessage(data.message);

        setTimeout(() => clearMessage(), 3000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setTimeout(() => clearMessage(), 3000);
    }
  };

  const clearMessage = () => {
    console.log("clearing message");

    setErrorMessage(null);
    setMessage(null);
  };

  return (
    <>
      <p style={{ color: "red" }}>{errorMessage ? errorMessage : null}</p>
      <p style={{ color: "green" }}>{message ? message : null}</p>
      <button onClick={testFetch}>Test</button>
    </>
  );
}

export default App;
