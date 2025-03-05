import React, { useState } from "react";

const ipAddresses = [
  "192.168.1.1",
  "10.0.0.1",
  "172.16.0.1",
  "192.168.0.101",
  "10.0.0.255",
  "172.16.254.1",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIPs = ipAddresses.filter((ip) => ip.includes(searchTerm));

  return (
    <div style={{ padding: "20px" }}>
      <h1>IP Address Search</h1>
      <input
        type="text"
        placeholder="Search IP..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <ul>
        {filteredIPs.map((ip, index) => (
          <li key={index}>{ip}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
