import React from "react";

const readOnly = ({
  car,
  handleEditClick,
  handleDeleteClick,
  handleAddAuction,
}) => {
  return (
    <tr>
      <th>{car.model}</th>
      <th>{car.year}</th>
      <th>{car.license_plate}</th>
      <th>{car.seating_capacity}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, car)}>Edit</button>
        <button onClick={() => handleDeleteClick(car.id)}>Delete</button>
      </th>
      <th>
        <button onClick={() => handleAddAuction(car)}>On Auction</button>
      </th>
    </tr>
  );
};

export default readOnly;
