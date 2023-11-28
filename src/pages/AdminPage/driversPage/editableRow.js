import React from "react";
import '../styles.css';

const EditableRow = ({ editDriver, handleEditChange, handleCancelClick }) => {
  return (
    <tr className="submit-new">
      <td>
        <input
          name="gov_id"
          className="input"
          type="integer"
          value={editDriver.gov_id}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="first_name"
          className="input"
          type="text"
          value={editDriver.first_name}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="last_name"
          className="input"
          type="text"
          value={editDriver.last_name}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="email"
          className="input"
          type="email"
          value={editDriver.email}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="number"
          className="input"
          type="integer"
          value={editDriver.number}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="address"
          className="input"
          type="text"
          value={editDriver.address}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="license_code"
          className="input"
          type="integer"
          value={editDriver.license_code}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <button>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
