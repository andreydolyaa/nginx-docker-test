import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRequest = (service) => {
    const baseUrl = import.meta.env.VITE_REACT_API_GATEWAY + service;
    setResponse(null);
    setLoading(true);
    fetch(baseUrl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResponse(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setResponse(error.message);
      });
  };

  return (
    <div>
      <button onClick={() => handleRequest("/api1")}>
        make HTTP request to microservice-1
      </button>
      <button onClick={() => handleRequest("/api2")}>
        make HTTP request to microservice-2
      </button>
      {loading && <div>Loading...</div>}
      {response && (
        <div>
          <p>Received: {response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
