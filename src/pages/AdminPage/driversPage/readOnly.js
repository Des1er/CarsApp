import React from "react";
import "../styles.css";

const readOnly = ({ driver, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="read-only">
      <th>{driver.government_id}</th>
      <th>{driver.firstname}</th>
      <th>{driver.secondname}</th>
      <th>{driver.email}</th>
      <th>{driver.phone_number}</th>
      <th>{driver.driver_license_id}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </button>
        <button onClick={() => handleDeleteClick(driver.id)}>Delete</button>
      </th>
    </tr>
  );
};

export default readOnly;
