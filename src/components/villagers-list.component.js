import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const villagerReqs = require.context(
  "../images/[VillagerImages]/",
  true,
  /\.png$/
);
const villagerPaths = villagerReqs.keys();

const exteriorReqs = require.context(
  "../images/[VillagerExteriors]/",
  true,
  /\.png$/
);
const exteriorPaths = exteriorReqs.keys();

const interiorReqs = require.context(
  "../images/[VillagerInteriors]/",
  true,
  /\.(png|jpeg|jpg)$/
);
const interiorPaths = interiorReqs.keys();

const Villager = (props) => {
  console.log(props.villager.birthday);
  return (
    <tr>
      <td width="10%" height="150px">
        <div className="villager-image-container">
          <img
            src={villagerReqs(
              villagerPaths.filter((path) => {
                return path.includes(props.villager.name);
              })
            )}
            alt={props.villager.name}
          ></img>
        </div>
      </td>
      <td width="20%" height="150px">
        <div className="exterior-image-container">
          <img
            className="exterior-image"
            src={exteriorReqs(
              exteriorPaths.filter((path) => {
                return path.includes(props.villager.name);
              })
            )}
            alt={props.villager.name + " house exterior"}
          ></img>
        </div>
      </td>
      <td width="30%" height="150px">
        <div className="interior-image-container">
          <img
            src={interiorReqs(
              interiorPaths.filter((path) => {
                return path.includes(props.villager.name);
              })
            )}
            alt={props.villager.name + " house interior"}
          ></img>
        </div>
      </td>
      <td width="20%px">
        Name: <strong>{props.villager.name}</strong>
        <br />
        Personality: <strong>{props.villager.personality}</strong>
        <br />
        Specie: <strong>{props.villager.specie}</strong>
        <br />
        Birthday:{" "}
        <strong>
          {props.villager.birthday.month +
            " " +
            moment(props.villager.birthday.day, "D").format("Do")}
        </strong>
        <br />
        Catchphrase: <strong>{props.villager.catchphrase}</strong>
      </td>
      <td width="20%">
        Styles:{" "}
        <strong>
          {props.villager.styles[0] + ", " + props.villager.styles[1]}
        </strong>
        <br />
        Colors:{" "}
        <strong>
          {props.villager.colors[0] + ", " + props.villager.colors[1]}
        </strong>
        <br />
        Song: <strong>{props.villager.song}</strong>
        <br />
      </td>
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
            <th>Villager</th>
            <th>Exterior</th>
            <th>Interior</th>
            <th>Information</th>
            <th>Preferences</th>
          </tr>
        </thead>
        <tbody>{villagerList()}</tbody>
      </table>
    </div>
  );
};
export default VillagersList;
