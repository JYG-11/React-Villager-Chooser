import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteVillager = () => {
  const [villagers, setVillagers] = useState([]);
  const [currentVillager, setCurrentVillager] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/villagers/")
      .then((response) => {
        setVillagers(response.data.map((villager) => villager));
        setCurrentVillager(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(
        "http://localhost:5000/villagers/remove/" + currentVillager._id,
        currentVillager
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    console.log(currentVillager._id);
    setVillagers(villagers.filter((vl) => vl._id !== currentVillager._id));
  };

  return (
    <div>
      <h3>Delete villager</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Pick a villager: </label>
          <select
            required
            className="form-control"
            value={currentVillager.name}
            onChange={(e) =>
              setCurrentVillager(
                villagers.find((villager) => villager.name === e.target.value)
              )
            }
          >
            {villagers.map(function (villager) {
              return (
                <option key={villager._id} value={villager.name}>
                  {villager.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Delete villager"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteVillager;
