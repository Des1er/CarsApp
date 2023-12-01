import React from "react";
import '../styles.css';

const readOnly = ({ job, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="read-only">
      <th>{job.id}</th>
      <th>{job.model}</th>
      <th>{job.mileage}</th>
      <th>{job.date}</th>
      <th>{job.time}</th>
      <th>{job.license_plate}</th>
      <th>{job.groups}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, job)}>Edit</button>
        <button onClick={() => handleDeleteClick(job.jobID)}>Delete</button>
      </th>
    </tr>
  );
};

export default readOnly;
