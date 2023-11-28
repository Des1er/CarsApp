import React from "react";
import '../styles.css';

const readOnly = ({ driver, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="read-only">
      <th>{driver.gov_id}</th>
      <th>{driver.first_name}</th>
      <th>{driver.last_name}</th>
      <th>{driver.email}</th>
      <th>{driver.number}</th>
      <th>{driver.address}</th>
      <th>{driver.license_code}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </button>
        <button onClick={() => handleDeleteClick(driver.gov_id)}>Delete</button>
      </th>
    </tr>
  );
};

export default readOnly;
