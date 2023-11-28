import React from "react";
import '../styles.css';

const EditableRow = ({ editFueling, handleEditChange, handleCancelClick }) => {
  return (
    <tr className="submit-new">
      <td>
        <td>
          <input
            name="license_plate"
            className="input"
            type="text"
            value={editFueling.license_plate}
            onChange={handleEditChange}
          ></input>
        </td>
        <input
          name="fuelDate"
          className="fuelDate"
          type="date"
          value={editFueling.fuelDate}
          onChange={handleEditChange}
        ></input>
      </td>

      <td>
        <input
          name="fuelType"
          className="input"
          type="text"
          value={editFueling.fuelType}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="fuelAmount"
          className="input"
          type="double"
          value={editFueling.fuelAmount}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="fuelCost"
          className="input"
          type="double"
          value={editFueling.fuelCost}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="personnel_id"
          className="input"
          type="integer"
          value={editFueling.personnel_id}
          onChange={handleEditChange}
        ></input>
      </td>

      <td>
        <input
          name="first_name"
          className="input"
          type="text"
          value={editFueling.first_name}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="last_name"
          className="input"
          type="text"
          value={editFueling.last_name}
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
