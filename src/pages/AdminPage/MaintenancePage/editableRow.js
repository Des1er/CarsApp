import React from "react";
import '../styles.css';


const EditableRow = ({ editJob, handleEditChange, handleCancelClick }) => {
  return (
    <tr className="submit-new">
      <td>
        <input
          name="jobID"
          className="input"
          type="integer"
          value={editJob.jobID}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="car_info"
          className="input"
          type="text"
          value={editJob.car_info}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="mileage"
          className="input"
          type="text"
          value={editJob.mileage}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="date"
          className="input"
          type="date"
          value={editJob.date}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="time"
          className="input"
          type="time"
          value={editJob.time}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="license_plate"
          className="input"
          type="text"
          value={editJob.license_plate}
          onChange={handleEditChange}
        ></input>
      </td>

      <td>
        <input
          name="description"
          className="input"
          type="text"
          value={editJob.description}
          onChange={handleEditChange}
        ></input>
      </td>
      <td>
        <input
          name="status"
          className="input"
          type="text"
          value={editJob.status}
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
