import React from "react";
import '../styles.css';

const readOnly = ({
  car,
  handleEditClick,
  handleDeleteClick,
  handleAddAuction,
}) => {
  return (
    <tr className="read-only">
      <th>{car.model}</th>
      <th>{car.year}</th>
      <th>{car.license_plate}</th>
      <th>{car.sitting_capacity}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, car)}>Edit</button>
        <button onClick={() => handleDeleteClick(car.license_plate)}>
          Delete
        </button>
      </th>
      <th>
        <button onClick={() => handleAddAuction(car)}>On Auction</button>
      </th>
    </tr>
  );
};

export default readOnly;
