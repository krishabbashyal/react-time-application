import Header from "./components/Header";
import Form from "./components/Form";
import Final from "./components/Final";
import React, { useState } from "react";

function App() {
  const [receivedData, setReceivedData] = useState();

  return (
    <div>
      <Header />
      <Form dataCollect={setReceivedData} />
      <Final data={receivedData} />
    </div>
  );
}

export default App;
