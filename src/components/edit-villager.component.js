import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const EditVillager = (props) => {
  let initial = Array.from(Array(31).keys());
  initial = initial.map((day) => moment(day + 1, "D").format("Do"));

  const months = moment.monthsShort();
  const [days, setDays] = useState(initial);

  const [name, setName] = useState("");
  const [personality, setPersonality] = useState("");
  const [specie, setSpecie] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState(0);
  const [catchphrase, setCatchphrase] = useState("");
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [song, setSong] = useState("");
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/villagers/" + currentVillager._id)
      .then((response) => {
        setName(response.data.name);
        setPersonality(response.data.personality);
        setSpecie(response.data.specie);
        setMonth(response.data.birthday.month);
        setDay(response.data.birthday.day);
        setCatchphrase(response.data.catchphrase);
        setStyle1(response.data.styles[0]);
        setStyle2(response.data.styles[1]);
        setColor1(response.data.colors[0]);
        setColor2(response.data.colors[1]);
        setSong(response.data.song);
      })
      .catch((error) => console.log(error));
  }, [currentVillager]);

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
    let temp = new Date(
      new Date(2020, moment(e.target.value, "MMM").format("M"), 1) - 1
    );
    setDays(
      Array.from(Array(temp.getDate()).keys()).map((day) =>
        moment(day + 1, "D").format("Do")
      )
    );
    console.log("print: " + temp.getDate());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const villager = {
      name: name,
      personality: personality,
      specie: specie,
      birthday: { month, day },
      catchphrase: catchphrase,
      styles: [style1, style2],
      colors: [color1, color2],
      song: song,
    };

    console.log(villager);

    axios
      .post(
        "http://localhost:5000/villagers/update/" + currentVillager._id,
        villager
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit villager</h3>
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
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Personality: </label>
          <input
            type="text"
            required
            className="form-control"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Specie: </label>
          <input
            type="text"
            required
            className="form-control"
            value={specie}
            onChange={(e) => setSpecie(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Birthday month: </label>
          <select
            required
            className="form-control"
            value={month}
            onChange={onChangeMonth}
          >
            {months.map(function (m) {
              return (
                <option key={m} value={m}>
                  {m}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Birthday day: </label>
          <select
            required
            className="form-control"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            {days.map(function (d) {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Catchphrase: </label>
          <input
            type="text"
            required
            className="form-control"
            value={catchphrase}
            onChange={(e) => setCatchphrase(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Style 1: </label>
          <input
            type="text"
            required
            className="form-control"
            value={style1}
            onChange={(e) => setStyle1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Style 2: </label>
          <input
            type="text"
            required
            className="form-control"
            value={style2}
            onChange={(e) => setStyle2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Color 1: </label>
          <input
            type="text"
            required
            className="form-control"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Color 2: </label>
          <input
            type="text"
            required
            className="form-control"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Song: </label>
          <input
            type="text"
            required
            className="form-control"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit villager"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditVillager;
