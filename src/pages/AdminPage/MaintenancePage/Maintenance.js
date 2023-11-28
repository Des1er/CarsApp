import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import EditableRow from "./editableRow";
import ReadOnly from "./readOnly";
import data from "./MOCK_DATA.json";
import { useState, useEffect } from "react";
import axios from "axios";
const Maintenance = () => {
  const url = "";
  const [jobAssignment, setJobAssignment] = useState(data);
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => jobAssignment(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const [addNewJob, setAddNewJob] = useState({
    jobID: "",
    car_info: "",
    mileage: "",
    date: "",
    time: "",
    license_plate: "",
    description: "",
    status: "",
  });
  const [getJobID, setJobID] = useState(null);
  const [editJob, setEditJob] = useState({
    jobID: "",
    car_info: "",
    mileage: "",
    date: "",
    time: "",
    license_plate: "",
    description: "",
    status: "",
  });

  //--------
  // adding functions
  //--------
  const handleAddSubmit = (e) => {
    e.preventDefault();

    setJobAssignment((prevArray) => [
      ...jobAssignment,
      {
        jobID: addNewJob.jobID,
        car_info: addNewJob.car_info,
        mileage: addNewJob.mileage,
        date: addNewJob.date,
        time: addNewJob.time,
        license_plate: addNewJob.license_plate,
        sitting_capacity: addNewJob.sitting_capacity,
        status: addNewJob.status,
      },
    ]);
    axios.post(url, jobAssignment).then((res) => {
      console.log("Successful");
    });
    setAddNewJob({
      jobID: "",
      car_info: "",
      mileage: "",
      date: "",
      time: "",
      license_plate: "",
      sitting_capacity: "",
      status: "",
    });
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, job) => {
    event.preventDefault();
    setJobID(job.jobID);
    setEditJob({
      jobID: job.jobID,
      car_info: job.car_info,
      mileage: job.mileage,
      date: job.date,
      time: job.time,
      license_plate: job.license_plate,
      description: job.description,
      sitting_capacity: job.sitting_capacity,
      status: job.status,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    var neweditJobs = [...jobAssignment];

    const index = jobAssignment.findIndex(
      (job) => job.license_plate === getJobID
    );
    neweditJobs[index] = {
      jobID: editJob.jobID,
      car_info: editJob.car_info,
      mileage: editJob.mileage,
      date: editJob.date,
      time: editJob.time,
      license_plate: editJob.license_plate,

      sitting_capacity: editJob.sitting_capacity,
      status: editJob.status,
    };
    setJobAssignment(neweditJobs);
    axios.post(url, jobAssignment).then((res) => {
      console.log("Successful");
    });
    setJobID(null);
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditJob({ ...editJob, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setJobID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = (jobID) => {
    var newJobs = [...jobAssignment];
    const index = jobAssignment.findIndex((job) => job.jobID === jobID);
    newJobs.splice(index, 1);
    setJobAssignment(newJobs);
    axios.post(url, jobAssignment).then((res) => {
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
              <th>jobID</th>
              <th>mileage</th>
              <th>Date</th>
              <th>Time</th>
              <th>License Plate</th>
              <th>Description</th>
              <th>status</th>
            </tr>
          </thead>

          <tbody>
            {jobAssignment.map((job) => (
              <Fragment>
                {getJobID === job.jobID ? (
                  <EditableRow
                    editJob={editJob}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    job={job}
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
            name="JobID"
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                jobID: e.target.value,
              });
            }}
            value={addNewJob.jobID}
            placeholder="please enter the Job ID: "
          ></input>
          <input
            className="input"
            type="text"
            name="car_info"
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                car_info: e.target.value,
              });
            }}
            value={addNewJob.car_info}
            placeholder="please enter the car_info: "
          ></input>
          <input
            className="input"
            type="integer"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, mileage: e.target.value });
            }}
            value={addNewJob.mileage}
            placeholder="please enter the mileage: "
          ></input>
          <input
            className="input"
            type="date"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, date: e.target.value });
            }}
            value={addNewJob.date}
            placeholder="please enter the date: "
          ></input>
          <input
            className="input"
            type="time"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, time: e.target.value });
            }}
            value={addNewJob.time}
            placeholder="please enter the time: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, license_plate: e.target.value });
            }}
            value={addNewJob.license_plate}
            placeholder="please enter the License Plate: "
          ></input>

          <input
            className="input"
            type="text"
            value={addNewJob.description}
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                description: e.target.value,
              });
            }}
            placeholder="please enter the description: "
          ></input>
          <input
            className="input"
            type="text"
            value={addNewJob.status}
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                status: e.target.value,
              });
            }}
            placeholder="please enter the Status: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Maintenance;
