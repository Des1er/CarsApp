import React from "react";
import '../styles.css';

const EditableRow = ({ editDriver, handleEditChange, handleCancelClick }) => {
  return (
    <tr className="submit-new">
      <td>
        <input
          name="government_id"
          className="input"
          type="integer"
          value={editDriver.government_id}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="firstname"
          className="input"
          type="text"
          value={editDriver.firstname}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="secondname"
          className="input"
          type="text"
          value={editDriver.secondname}
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
          name="phone_number"
          className="input"
          type="integer"
          value={editDriver.phone_number}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="password"
          className="input"
          type="text"
          value={editDriver.password}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="driving_license_id"
          className="input"
          type="integer"
          value={editDriver.driving_license_id}
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
