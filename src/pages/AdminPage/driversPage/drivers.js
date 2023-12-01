import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";
import { useState } from "react";
import EditableRow from "./editableRow";
import axios from "axios";
import ReadOnly from "./readOnly";
import "../styles.css";
import { IoMdHelpBuoy } from "react-icons/io";

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
    firstname: "",
    secondname: "",
    email: "",
    phone_number: "",
    driving_license_id: "",
    password:"",
    username:""
  });

  const [getID, setID] = useState(null);
  const [editDriver, setEditDriver] = useState({
    government_id: "",
    firstname: "",
    secondname: "",
    email: "",
    phone_number: "",
    driving_license_id: "",
    password:"",
    username:""
  });
  //--------
  // adding functions
  //--------
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/users/signup", {
       //addNewDriver
       "username":addNewDriver.username,
       "password":addNewDriver.password,
       "email": addNewDriver.email,
       "firstname":addNewDriver.firstname,
       "government_id": addNewDriver.government_id,
      "secondname": addNewDriver.secondname,
      "phone_number": addNewDriver.phone_number,
      "driving_license_id":addNewDriver.driving_license_id


      }
    );
      //setDriverData([...driverData, response.data]);

      // setAddNewDriver({
      //   government_id: "",
      //   firstname: "",
      //   secondname: "",
      //   email: "",
      //   phone_number: "",
      //   address: "",
      //   driving_license_id: "",
      //   groups: [],
      // });
    } catch (error) {
      console.log(error);
    }
    console.log(addNewDriver.username);
    console.log(addNewDriver.password);
    console.log(addNewDriver.email);
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, driver) => {
    event.preventDefault();
    setID(driver.id);
    setEditDriver({
      government_id: driver.government_id,
      firstname: driver.firstname,
      username:driver.username,
      secondname: driver.secondname,
      email: driver.email,
      phone_number: driver.phone_number,
      address: driver.address,
      driving_license_id: driver.driving_license_id,
      groups: driver.groups,
      password: driver.password
    });
    
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = async (event) => {

    // try {
    //   // Make a POST request to your Django backend
    //   const response = await axios.put(
    //     `http://localhost:8000/users/${getID}`,
    //     editDriver
    //   );
    //   // setDriverData((prevArray) =>
    //   //   prevArray.map((driver) =>
    //   //     driver.government_id === editDriver.government_id
    //   //       ? response.data
    //   //       : driver
    //   //   )
    //   // );
      
    //   setEditDriver({
    //     government_id: "",
    //     firstname: "",
    //     secondname: "",
    //     email: "",
    //     phone_number: "",
    //     address: "",
    //     driving_license_id: "",
    //     groups: [],
    //   });
    //   setID(null);
    // } catch (error) {
    //   console.error("Error making POST request:", error.message);
    // }
try{
    const response = await axios.put(
          `http://localhost:8000/users/${getID}`,
          editDriver
        );} catch(error){
          console.log(error)
        }
        // setDriverData((prevArray) =>
        //   prevArray.map((driver) =>
        //     driver.government_id === editDriver.government_id
        //       ? response.data
        //       : driver
        //   )
        // );
        
        setEditDriver({
          government_id: "",
          firstname: "",
          secondname: "",
          email: "",
          phone_number: "",
          address: "",
          driving_license_id: "",
          groups: [],
        });
        setID(null);
  };
  const handleEditChange = (event) => {
    setEditDriver({ ...editDriver, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = async (id) => {
    try{
      const response = await axios.delete(
      `http://localhost:8000/users/${id}`
    );}
    catch(error){
      console.log(error)
    }
  

    // Update the carData state to reflect the removal of the deleted car

    //setDriverData(driverData.filter((driver) => driver.id !== driverID));
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
              <th>phone_number</th>
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
                firstname: e.target.value,
              });
            }}
            value={addNewDriver.firstname}
            placeholder="please enter your name: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, secondname: e.target.value });
            }}
            value={addNewDriver.secondname}
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
            value={addNewDriver.phone_number}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, phone_number: e.target.value });
            }}
            placeholder="please enter your phone phone_number: "
          ></input>
          <input
            className="input"
            type="text"
            value={addNewDriver.password}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, password: e.target.value });
            }}
            placeholder="please enter your password: "
          ></input>
          <input
            className="input"
            type="text"
            value={addNewDriver.username}
            onChange={(e) => {
              setAddNewDriver({ ...addNewDriver, username: e.target.value });
            }}
            placeholder="please enter your username: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewDriver.driving_license_id}
            onChange={(e) => {
              setAddNewDriver({
                ...addNewDriver,
                driving_license_id: e.target.value,
              });
            }}
            placeholder="please enter your driving_license_id: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Drivers;
