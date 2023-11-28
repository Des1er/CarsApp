import React from "react";

const EditableRow = ({ editCar, handleEditChange, handleCancelClick }) => {
  return (
    <tr>
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
          type="number"
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
          type="number"
          value={editCar.seating_capacity}
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
