import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Modal({ onSubmit, closeModal }) {
  const [formData, setFormData] = useState({
    year: "2025-03-31",
    bs: {
      assets: {},
    },
  });

  const assetKeys = [
    "tangible_assets",
    "inventories",
    "trade_receivables",
    "cash_and_bank_balances",
  ];

  const handleChange = (key, value) => {
    // If empty → remove key (better behavior)
    if (value === "") {
      setFormData((prev) => {
        const updatedAssets = { ...prev.bs.assets };
        delete updatedAssets[key];

        return {
          ...prev,
          bs: {
            ...prev.bs,
            assets: updatedAssets,
          },
        };
      });
      return;
    }

    // Only numbers allowed
    if (isNaN(value)) return;

    setFormData((prev) => ({
      ...prev,
      bs: {
        ...prev.bs,
        assets: {
          ...prev.bs.assets,
          [key]: Number(value),
        },
      },
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (Object.keys(formData.bs.assets).length === 0) {
      toast.warn("please enter atleast one field");
      return;
    } else {
      toast.success("data added successfully");
      onSubmit(formData);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        background: "white",
        padding: "20px",
        border: "1px solid black",
        width: "400px",
      }}
    >
      <h2> Add Financial Data (2025)</h2>

      {assetKeys.map((key) => (
        <div className="form-group mb-2" key={key}>
          <ToastContainer />
          <label>{key}</label>
          <input
            className="form-control"
            type="number" // ✅ FIXED
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      ))}

      <br />

      <button className="btn btn-success mx-2" onClick={handleSubmit}>
        Submit
      </button>

      <button className="btn btn-warning" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
