import React from "react";

function Table({ data }) {

  if (!data || data.length === 0) return <p>No Data</p>;

  // Extract years dynamically
  const years = data.map(item => item.year);

  // Extract asset keys dynamically
  const assetKeys = Object.keys(data[0].bs.assets);

  return (
    <table className="table table-bordered table-striped" border="1" cellPadding="10">

      <thead>
        <tr>
          <th>Assets</th>
          {years.map((year, index) => (
            <th key={index}>
              {new Date(year).toLocaleDateString("en-GB")}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {assetKeys.map((key) => (
          <tr key={key}>
            <td>{key}</td>

            {data.map((item, index) => (
              <td key={index}>
                {item.bs.assets[key] ?? "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default Table;