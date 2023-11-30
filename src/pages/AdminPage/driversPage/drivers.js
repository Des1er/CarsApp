import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";
import { useState } from "react";
import EditableRow from "./editableRow";
import axios from "axios";
import ReadOnly from "./readOnly";
import "../styles.css";

const Drivers = () => {
  const url = "http://127.0.0.1:8000/users/drivers";
  const urlP = "http://127.0.0.1:8000/users";

  // data
  const [driverData, setDriverData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setDriverData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  const [addNewDriver, setAddNewDriver] = useState({
    government_id: "",
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    address: "",
    license_code: "",
    groups: [],
  });
  const [getID, setID] = useState(null);
  const [editDriver, setEditDriver] = useState({
    government_id: "",
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    address: "",
    license_code: "",
    groups: [],
  });
  //--------
  // adding functions
  //--------
  const handleAddSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(urlP, addNewDriver);
      setDriverData([...driverData, response.data]);

      setAddNewDriver({
        government_id: "",
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        address: "",
        license_code: "",
        groups: [],
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, driver) => {
    event.preventDefault();
    setID(driver.id);
    setEditDriver({
      government_id: driver.government_id,
      first_name: driver.first_name,
      last_name: driver.last_name,
      email: driver.email,
      number: driver.number,
      address: driver.address,
      license_code: driver.license_code,
      groups: driver.groups,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to your Django backend
      const response = await axios.put(
        `http://localhost:8000/users/drivers/${getID}`,
        editDriver
      );
      setDriverData((prevArray) =>
        prevArray.map((driver) =>
          driver.government_id === editDriver.government_id
            ? response.data
            : driver
        )
      );
      setEditDriver({
        government_id: "",
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        address: "",
        license_code: "",
        groups: [],
      });
      setID(null);
    } catch (error) {
      console.error("Error making POST request:", error.message);
    }
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
    const index = driverData.findIndex(
      (driver) => driver.government_id === driverID
    );
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
        <table className="table">
          <thead>
            <tr>
              <th>government_id</th>
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
                {getID === driver.id ? (
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
      <div className="submit-new">
        <form onSubmit={handleAddSubmit}>
          <input
            className="input"
            type="integer"
            name="government_id"
            onChange={(e) => {
              setAddNewDriver({
                ...addNewDriver,
                government_id: e.target.value,
              });
            }}
            value={addNewDriver.government_id}
            placeholder="please enter your government_id: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewDriver({
                ...addNewDriver,
                first_name: e.target.value,
              });
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
