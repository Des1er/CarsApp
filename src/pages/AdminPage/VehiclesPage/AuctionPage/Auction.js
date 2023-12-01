import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Auction = () => {
  const url = "";
  const { state } = useLocation();
  const [auctionCar, setAuctionCar] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => setAuctionCar(res.data.data))
  //     .catch((err) => console.log(err));
  // }, [url]);
  if (!state) {
    return <p>No cars available for auction.</p>;
  }
  const handleDeleteAuction = (carPlate, e) => {
    e.preventDefault();
    var newCars = [...auctionCar];
    const index = auctionCar.findIndex((car) => car.license_plate === carPlate);
    newCars[index].status = false;
    setAuctionCar(newCars);
    axios.post(url, newCars).then((res) => {
      console.log("Successful");
    });
    newCars.splice(index, 1);
    setAuctionCar(newCars);
  };
  const onSold = (carPlate, e) => {
    var newCars = [...auctionCar];
    e.preventDefault();
    const index = auctionCar.findIndex((car) => car.license_plate === carPlate);
    newCars.splice(index, 1);
    setAuctionCar(newCars);
    axios.post(url, auctionCar).then((res) => {
      console.log("Successful");
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>License Plate</th>
            <th>Sitting Capacity</th>
          </tr>
        </thead>
        <tbody>
          {state.auctionCar.map((car) => (
            <tr>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.license_plate}</td>
              <td>{car.sitting_capacity}</td>
              <td>
                <button onClick={() => handleDeleteAuction(car.license_plate)}>
                  Delete
                </button>
                <button onClick={() => onSold(car.license_plate)}>Sold</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to={{
          pathname: "/vehicles",
        }}
      >
        <p>Back to Vehicles</p>
      </Link>
    </div>
  );
};

export default Auction;
