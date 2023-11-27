import React from "react";
import '../styles.css';

const readOnly = ({ fueling, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="read-only">
      <th>{fueling.license_plate}</th>
      <th>{fueling.fuelDate}</th>
      <th>{fueling.fuelType}</th>
      <th>{fueling.fuelAmount}</th>
      <th>{fueling.fuelCost}</th>
      <th>{fueling.personnel_id}</th>
      <th>{fueling.first_name}</th>
      <th>{fueling.last_name}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, fueling)}>
          Edit
        </button>
        <button onClick={() => handleDeleteClick(fueling.personnel_id)}>
          Delete
        </button>
      </th>
    </tr>
  );
};

export default readOnly;
