import React from "react";

const readOnly = ({ job, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <th>{job.jobID}</th>
      <th>{job.car_info}</th>
      <th>{job.mileage}</th>
      <th>{job.date}</th>
      <th>{job.time}</th>
      <th>{job.license_plate}</th>
      <th>{job.description}</th>
      <th>{job.status}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, job)}>Edit</button>
        <button onClick={() => handleDeleteClick(job.jobID)}>Delete</button>
      </th>
    </tr>
  );
};

export default readOnly;
