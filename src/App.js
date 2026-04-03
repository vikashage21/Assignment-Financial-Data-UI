import React, { useState } from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";
import data from "./data/data.json";

function App() {

  const [financialData, setFinancialData] = useState(data);
  const [showModal, setShowModal] = useState(false);

  // Add new year
  const handleAddYear = (newYearData) => {
    setFinancialData([newYearData, ...financialData]);
    setShowModal(false);
  };

  return (
    <div style={{ padding: "20px" }}>

      <div className="d-flex justify-content-between">
          <h1 className="link-opacity-50">
            <i class="bi bi-bullseye m-2"></i>
            Financial Data UI</h1>

      <button className="btn btn-success " onClick={() => setShowModal(true)}>
        Add Latest Year Financials
      </button>
        </div>

    

      <br /><br />

      <Table data={financialData} />

      {showModal && (
        <Modal
          onSubmit={handleAddYear}
          closeModal={() => setShowModal(false)}
        />
      )}

    </div>
  );
}

export default App;