import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EditableRow from "./editableRow";
import ReadOnly from "./readOnly";
import data from "./MOCK_DATA.json";
import axios from "axios";
const Fueling = () => {
  const url = "";
  const [fueling, setFueling] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setFueling(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [addNewFueling, setAddNewFueling] = useState({
    license_plate: "",
    fuelDate: "",
    fuelType: "",
    fuelAmount: "",
    fuelCost: "",
    personnel_id: "",
    first_name: "",
    last_name: "",
  });

  const [getID, setID] = useState(null);
  const [editFueling, setEditFueling] = useState({
    license_plate: "",
    fuelDate: "",
    fuelType: "",
    fuelAmount: "",
    fuelCost: "",
    personnel_id: "",
    first_name: "",
    last_name: "",
  });

  //--------
  // adding functions
  //--------
  const handleAddSubmit = (e) => {
    e.preventDefault();

    setFueling((prevArray) => [
      ...fueling,
      {
        license_plate: addNewFueling.license_plate,
        fuelDate: addNewFueling.fuelDate,
        fuelType: addNewFueling.fuelType,
        fuelAmount: addNewFueling.fuelAmount,
        fuelCost: addNewFueling.fuelCost,
        personnel_id: addNewFueling.personnel_id,
        first_name: addNewFueling.first_name,
        last_name: addNewFueling.last_name,
      },
      axios.post(url, fueling).then((res) => {
        console.log("Successful");
      }),
    ]);

    setAddNewFueling({
      license_plate: "",
      fuelDate: "",
      fuelType: "",
      fuelAmount: "",
      fuelCost: "",
      personnel_id: "",
      first_name: "",
      last_name: "",
    });
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, fuel) => {
    event.preventDefault();
    setID(fuel.personnel_id);
    setEditFueling({
      license_plate: fuel.license_plate,
      fuelDate: fuel.fuelDate,
      fuelType: fuel.fuelType,
      fuelAmount: fuel.fuelAmount,
      fuelCost: fuel.fuelCost,
      personnel_id: fuel.personnel_id,
      first_name: fuel.first_name,
      last_name: fuel.last_name,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    var neweditFuelings = [...fueling];

    const index = fueling.findIndex(
      (fueling) => fueling.personnel_id === getID
    );
    neweditFuelings[index] = {
      license_plate: editFueling.license_plate,
      fuelDate: editFueling.fuelDate,
      fuelType: editFueling.fuelType,
      fuelAmount: editFueling.fuelAmount,
      fuelCost: editFueling.fuelCost,
      personnel_id: editFueling.personnel_id,
      first_name: editFueling.first_name,
      last_name: editFueling.last_name,
    };
    setFueling(neweditFuelings);
    setID(null);
    axios.post(url, fueling).then((res) => {
      console.log("Successful");
    });
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditFueling({ ...editFueling, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = (personnel_id) => {
    var newFueling = [...fueling];
    const index = fueling.findIndex(
      (fueling) => fueling.personnel_id === personnel_id
    );
    newFueling.splice(index, 1);
    setFueling(newFueling);
    axios.post(url, fueling).then((res) => {
      console.log("Successful");
    });
  };
  // ----
  //-----add to auction-----
  //----

  //--------
  // return
  //--------
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>License plate</th>
              <th>FuelDate</th>
              <th>FuelType</th>
              <th>FuelAmount</th>
              <th>FuelCost</th>
              <th>Personnel ID</th>
              <th>first_name</th>
              <th>last_name</th>
            </tr>
          </thead>

          <tbody>
            {fueling.map((fueling) => (
              <Fragment>
                {getID === fueling.personnel_id ? (
                  <EditableRow
                    editFueling={editFueling}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    fueling={fueling}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div>
        <form onSubmit={handleAddSubmit}>
          <input
            className="input"
            type="integer"
            name="license_plate"
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                license_plate: e.target.value,
              });
            }}
            value={addNewFueling.license_plate}
            placeholder="please enter the Job ID: "
          ></input>
          <input
            className="input"
            type="date"
            onChange={(e) => {
              setAddNewFueling({ ...addNewFueling, fuelDate: e.target.value });
            }}
            value={addNewFueling.fuelDate}
            placeholder="please enter the fuelDate: "
          ></input>
          <input
            className="input"
            type="text"
            name="fuelType"
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                fuelType: e.target.value,
              });
            }}
            value={addNewFueling.fuelType}
            placeholder="please enter the fuelType: "
          ></input>

          <input
            className="input"
            type="fuelAmount"
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                fuelAmount: e.target.value,
              });
            }}
            value={addNewFueling.fuelAmount}
            placeholder="please enter the fuelAmount: "
          ></input>
          <input
            className="input"
            type="integer"
            onChange={(e) => {
              setAddNewFueling({ ...addNewFueling, fuelCost: e.target.value });
            }}
            value={addNewFueling.fuelCost}
            placeholder="please enter the Fuel Cost: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewFueling.personnel_id}
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                personnel_id: e.target.value,
              });
            }}
            placeholder="please enter the personnel ID: "
          ></input>
          <input
            className="input"
            type="text"
            value={addNewFueling.first_name}
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                first_name: e.target.value,
              });
            }}
            placeholder="please enter the first_name: "
          ></input>

          <input
            className="input"
            type="text"
            value={addNewFueling.last_name}
            onChange={(e) => {
              setAddNewFueling({
                ...addNewFueling,
                last_name: e.target.value,
              });
            }}
            placeholder="please enter the last_name: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Fueling;
