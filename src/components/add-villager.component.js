import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import moment from "moment";

const AddVillager = () => {
  let initial = Array.from(Array(31).keys());
  initial = initial.map((day) => moment(day + 1, "D").format("Do"));

  const months = moment.monthsShort();
  const [days, setDays] = useState(initial);

  const [name, setName] = useState("");
  const [personality, setPersonality] = useState("");
  const [specie, setSpecie] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [catchphrase, setCatchphrase] = useState("");
  const [skill, setSkill] = useState("");
  const [goal, setGoal] = useState("");
  const [fear, setFear] = useState("");
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [song, setSong] = useState("");

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
      skill: skill,
      goal: goal,
      fear: fear,
      styles: [style1, style2],
      colors: [color1, color2],
      song: song,
    };

    console.log(villager);

    axios
      .post("http://localhost:5000/villagers/add", villager)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Add new villager</h3>
      <form onSubmit={onSubmit}>
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
          <label>Skill: </label>
          <input
            type="text"
            required
            className="form-control"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Goal: </label>
          <input
            type="text"
            required
            className="form-control"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Fear: </label>
          <input
            type="text"
            required
            className="form-control"
            value={fear}
            onChange={(e) => setFear(e.target.value)}
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
            value="Add villager"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default AddVillager;
