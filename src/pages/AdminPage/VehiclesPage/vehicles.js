import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import EditableRow from "./editableRow";
import axios from "axios";
import ReadOnly from "./readOnly";
import '../styles.css';

const Vehicles = () => {
  //----
  // post
  //----

  const url = "http://127.0.0.1:8000/vehicles";

  // data
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCarData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const [addNewCar, setAddNewCar] = useState({
    model: "",
    year: 0,
    license_plate: "",
    seating_capacity: 0,
    status: "",
    vin: "",
    photo: "",

    created_time: "2023-11-27T20:40:41.557657Z",
  });
  const [getID, setID] = useState(null);
  const [editCar, setEditCar] = useState({
    model: "",
    year: "",
    license_plate: "",
    seating_capacity: 0,
    status: "",
    vin: "",
    photo: "",
    created_time: "2023-11-27T20:40:41.557657Z",
  });
  const [statusCar, setstatusCar] = useState([]);

  // useEffect(() => {
  //   const carsAfterstatus = data.filter(
  //     (car) => !soldCars.some((sold) => sold.licensePlate === car.licensePlate)
  //   );

  //   // Update the state with the new array
  //   setCarData(carsAfterstatus);
  // }, [carData, soldCars]);}
  //--------
  // adding functions
  //--------
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your Django backend
      const response = await axios.post(url, addNewCar);

      // Update the cars state with the new car
      setCarData([...carData, response.data]);

      // Clear the form data for the next entry
      setAddNewCar({
        model: "",
        year: "",
        license_plate: "",
        seating_capacity: "",
        status: "",
        vin: 0,
        photo: null,
        created_time: "2023-11-27T20:40:41.557657Z",
      });
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error.response.data);
    }
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, car) => {
    event.preventDefault();
    setID(car.id);
    setEditCar({
      model: car.model,
      year: car.year,
      license_plate: car.license_plate,
      seating_capacity: car.seating_capacity,

      status: "",
      vin: 0,
      photo: null,
      created_time: "2023-11-27T20:40:41.557657Z",
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    // var newEditCars = [...carData];

    // const index = carData.findIndex((car) => car.id === getID);
    // newEditCars[index] = {
    //   model: editCar.model,
    //   year: editCar.year,
    //   license_plate: editCar.license_plate,
    //   seating_capacity: editCar.seating_capacity,
    //   status: editCar.status,
    //   vin: editCar.vin,
    //   photo: editCar.photo,
    //   created_time: editCar.created_time,
    // };
    // setCarData(newEditCars);
    setID(null);
    try {
      // Make a POST request to your Django backend
      const response = await axios.put(
        `http://localhost:8000/vehicles/${getID}`,
        editCar
      );

      // Handle the response if needed
      console.log("Response:", response.data);

      // Update the cars state with the new car
      setCarData((prevCarData) =>
        prevCarData.map((car) => (car.id === editCar.id ? response.data : car))
      );

      // Clear the form data for the next entry
      setEditCar({
        model: "",
        year: "",
        license_plate: "",
        seating_capacity: "",
        status: "",
        vin: "",
        photo: "",
        created_time: "",
      });
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error.message);
    }
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditCar({ ...editCar, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = async (carID) => {
    try {
      // Send a DELETE request to remove the car with the specified ID
      const response = await axios.delete(
        `http://localhost:8000/vehicles/${carID}`
      );
      console.log("Car deleted successfully:", response.data);

      // Update the carData state to reflect the removal of the deleted car

      setCarData(carData.filter((car) => car.id !== carID));
    } catch (error) {
      console.error("Error deleting car:", error.message);
    }
  };
  // ----
  //-----add to status-----
  //----
  const handleAddstatus = (sellCar) => {
    const isCarAlreadySelected = statusCar.some(
      (car) => car.license_plate === sellCar.license_plate
    );
    if (!isCarAlreadySelected) {
      var newStat = [...carData];
      const index = carData.findIndex(
        (car) => car.license_plate === sellCar.license_plate
      );
      newStat[index].status = true;
      setCarData(newStat);
      setstatusCar((prevArray) => [
        ...statusCar,
        {
          model: sellCar.model,
          year: sellCar.year,
          license_plate: sellCar.license_plate,
          seating_capacity: sellCar.seating_capacity,
          status: true,
          information: sellCar.information,
        },
      ]);
      axios.post(url, carData).then((res) => {
        console.log("Successful");
      });
    }
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
              <th>Model</th>
              <th>Year</th>
              <th>License Plate</th>
              <th>Sitting Capacity</th>
            </tr>
          </thead>

          <tbody>
            {carData.map((car) => (
              <Fragment>
                {getID === car.id ? (
                  <EditableRow
                    editCar={editCar}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    car={car}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handleAddstatus={handleAddstatus}
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
            type="text"
            name="model"
            onChange={(e) => {
              setAddNewCar({
                ...addNewCar,
                model: e.target.value,
              });
            }}
            value={addNewCar.model}
            placeholder="please enter the model: "
          ></input>
          <input
            className="input"
            type="integer"
            onChange={(e) => {
              setAddNewCar({ ...addNewCar, year: e.target.value });
            }}
            value={addNewCar.year}
            placeholder="please enter the year: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewCar({ ...addNewCar, license_plate: e.target.value });
            }}
            value={addNewCar.license_plate}
            placeholder="please enter the License Plate: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewCar.seating_capacity}
            onChange={(e) => {
              setAddNewCar({
                ...addNewCar,
                seating_capacity: e.target.value,
              });
            }}
            placeholder="please enter the sitting capacity: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
      {/* <Link
        to={{
          pathname: "/auction",
        }}
      >
        <p className="box">Auction</p>
      </Link> */}
    </div>
  );
};
export default Vehicles;
