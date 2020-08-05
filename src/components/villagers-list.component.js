import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Villager = (props) => {
  console.log(props.villager.birthday);
  return (
    <tr>
      <td>{props.villager.name}</td>
      <td>{props.villager.personality}</td>
      <td>{props.villager.specie}</td>
      <td>
        {props.villager.birthday.month +
          " " +
          moment(props.villager.birthday.day, "D").format("Do")}
      </td>
      <td>{props.villager.catchphrase}</td>
      <td>{props.villager.styles[0] + ", " + props.villager.styles[1]}</td>
      <td>{props.villager.colors[0] + ", " + props.villager.colors[1]}</td>
      <td>{props.villager.song}</td>
    </tr>
  );
};

const VillagersList = () => {
  const [villagers, setVillagers] = useState([]);

  const villagerList = () => {
    return villagers.map((currentVillager) => {
      return (
        <Villager
          villager={currentVillager}
          deleteVillager={deleteVillager}
          key={currentVillager._id}
        />
      );
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/villagers/")
      .then((response) => {
        setVillagers(Array.from(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteVillager = (id) => {
    axios
      .delete("http://localhost:5000/villagers/delete/" + id)
      .then((res) => console.log(res.data));

    setVillagers(villagers.filter((vl) => vl._id !== id));
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Personality</th>
            <th>Specie</th>
            <th>Birthday</th>
            <th>Catchphrase</th>
            <th>Styles</th>
            <th>Colors</th>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>{villagerList()}</tbody>
      </table>
    </div>
  );
};
export default VillagersList;
