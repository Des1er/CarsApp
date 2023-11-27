import React, { useState } from "react";
import axios from "axios";
function Popup({ triggerTask, setTriggerTask }) {
  const url = "";
  const [newTask, setNewTask] = useState({
    gov_id: 0,
    licensePlate: "",
    start_point: "",
    end_point: "",
  });
  const handleSubmission = (e) => {
    e.preventDefault();
    axios
      .post(url, { newTask })
      .then((res) => console.log("successful"))
      .catch((err) => console.log(err));
  };
  return triggerTask ? (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type="integer"
          name="gov_id"
          onChange={(e) => {
            setNewTask({ ...newTask, gov_id: e.target.value });
          }}
        ></input>
        <input
          type="text"
          name="licensePlate"
          onChange={(e) => {
            setNewTask({ ...newTask, licensePlate: e.target.value });
          }}
        ></input>
        <input
          type="integer"
          name="start_point"
          onChange={(e) => {
            setNewTask({ ...newTask, start_point: e.target.value });
          }}
        ></input>
        <input
          type="integer"
          name="end_point"
          onChange={(e) => {
            setNewTask({ ...newTask, end_point: e.target.value });
          }}
        ></input>
        <button>Save</button>
        <button onClick={setTriggerTask(false)}>Close</button>
      </form>
    </div>
  ) : (
    ""
  );
}

export default Popup;
