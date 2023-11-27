import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";
import { useState } from "react";
import EditableRow from "./editableRow";
import axios from "axios";
import ReadOnly from "./readOnly";
const Drivers = () => {
  const url = "";
  // data
  const [driverData, setDriverData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setDriverData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const [addNewDriver, setAddNewDriver] = useState({
    gov_id: "",
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    address: "",
    license_code: "",
    tasks: [],
  });
  const [getID, setID] = useState(null);
  const [editDriver, setEditDriver] = useState({
    gov_id: "",
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    address: "",
    license_code: "",
    tasks: [],
  });
  //--------
  // adding functions
  //--------
  const handleAddSubmit = (e) => {
    e.preventDefault();

    setDriverData((prevArray) => [
      ...driverData,
      {
        gov_id: addNewDriver.gov_id,
        first_name: addNewDriver.first_name,
        last_name: addNewDriver.last_name,
        email: addNewDriver.email,
        number: addNewDriver.number,
        address: addNewDriver.address,
        license_code: addNewDriver.license_code,
        tasks: addNewDriver.tasks,
      },
    ]);
    axios.post(url, driverData).then((res) => {
      console.log("Successful");
    });
    setAddNewDriver({
      gov_id: "",
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      address: "",
      license_code: "",
      tasks: [],
    });
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, driver) => {
    event.preventDefault();
    setID(driver.gov_id);
    setEditDriver({
      gov_id: driver.gov_id,
      first_name: driver.first_name,
      last_name: driver.last_name,
      email: driver.email,
      number: driver.number,
      address: driver.address,
      license_code: driver.license_code,
      tasks: driver.tasks,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    // const editedDriver = {
    //   gov_id: getID,
    //   first_name: editDriver.first_name,
    //   last_name: editDriver.last_name,
    //   email: editDriver.email,
    //   number: editDriver.number,
    //   address: editDriver.address,
    //   license_code: editDriver.license_code,
    // }
    var newEditdrivers = [...driverData];

    const index = driverData.findIndex((driver) => driver.gov_id === getID);
    newEditdrivers[index] = {
      gov_id: getID,
      first_name: editDriver.first_name,
      last_name: editDriver.last_name,
      email: editDriver.email,
      number: editDriver.number,
      address: editDriver.address,
      license_code: editDriver.license_code,
    };
    setDriverData(newEditdrivers);
    setID(null);
    axios.post(url, driverData).then((res) => {
      console.log("Successful");
    });
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditDriver({ ...editDriver, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = (driverID) => {
    var newDrivers = [...driverData];
    const index = driverData.findIndex((driver) => driver.gov_id === driverID);
    newDrivers.splice(index, 1);
    setDriverData(newDrivers);
    axios.post(url, driverData).then((res) => {
      console.log("Successful");
    });
  };
  //--------
  // return
  //--------
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Gov_id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>License Code</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {driverData.map((driver) => (
              <Fragment>
                {getID === driver.gov_id ? (
                  <EditableRow
                    editDriver={editDriver}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    driver={driver}
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
            name="gov_id"
            onChange={(e) => {
              setAddNewDriver({
                ...addNewDriver,
                gov_id: e.target.value,
              });
            }}
            value={addNewDriver.gov_id}
            placeholder="please enter your GOV_ID: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, first_name: e.target.value });
            }}
            value={addNewDriver.first_name}
            placeholder="please enter your name: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, last_name: e.target.value });
            }}
            value={addNewDriver.last_name}
            placeholder="please enter your Surname: "
          ></input>
          <input
            className="input"
            type="email"
            value={addNewDriver.email}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, email: e.target.value });
            }}
            placeholder="please enter your email: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewDriver.number}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, number: e.target.value });
            }}
            placeholder="please enter your phone number: "
          ></input>
          <input
            className="input"
            type="text"
            value={addNewDriver.address}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, address: e.target.value });
            }}
            placeholder="please enter your address: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewDriver.license_code}
            onChange={(e) => {
              setAddNewDriver({
                ...addNewDriver,
                license_code: e.target.value,
              });
            }}
            placeholder="please enter your License_code: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
    </div>
  );
};
export default Drivers;
