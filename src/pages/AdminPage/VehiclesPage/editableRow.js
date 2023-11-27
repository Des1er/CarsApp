import React from "react";
import '../styles.css';

const EditableRow = ({ editCar, handleEditChange, handleCancelClick }) => {
  return (
    <tr className="submit-new">
      <td>
        <input
          name="model"
          className="input"
          type="text"
          value={editCar.model}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="year"
          className="input"
          type="integer"
          value={editCar.year}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="license_plate"
          className="input"
          type="text"
          value={editCar.license_plate}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="sitting_capacity"
          className="input"
          type="integer"
          value={editCar.sitting_capacity}
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
