import React from "react";
import axios from "axios";
const AssignVeh = ({ triggerVehicle, setTriggerVehicle }) => {
  const url = "";
  const [newAssignment, setNewAssignment] = useState({
    gov_id: 0,
    licensePlate: "",
  });
  const handleSubmission = (e) => {
    e.preventDefault();
    axios
      .post(url, { newAssignment })
      .then((res) => console.log("successful"))
      .catch((err) => console.log(err));
  };
  return triggerVehicle ? (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type="integer"
          name="gov_id"
          onChange={(e) => {
            setNewAssignment({ ...newAssignment, gov_id: e.target.value });
          }}
        ></input>
        <input
          type="text"
          name="licensePlate"
          onChange={(e) => {
            setNewAssignment({
              ...newAssignment,
              licensePlate: e.target.value,
            });
          }}
        ></input>
        <button>Save</button>
        <button onClick={setTriggerVehicle(false)}>Close</button>
      </form>
    </div>
  ) : (
    ""
  );
};

export default AssignVeh;
