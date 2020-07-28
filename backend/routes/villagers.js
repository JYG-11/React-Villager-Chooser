const router = require("express").Router();
let Villager = require("../models/villager.model");

router.route("/").get((req, res) => {
  Villager.find()
    .then((villagers) => res.json(villagers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const personality = req.body.personality;
  const specie = req.body.specie;
  const birthday = req.body.birthday;
  const catchphrase = req.body.catchphrase;
  const skill = req.body.skill;
  const goal = req.body.goal;
  const fear = req.body.fear;
  const styles = req.body.styles;
  const colors = req.body.colors;
  const song = req.body.song;

  const newVillager = new Villager({
    name,
    personality,
    specie,
    birthday,
    catchphrase,
    skill,
    goal,
    fear,
    styles,
    colors,
    song,
  });

  newVillager
    .save()
    .then(() => res.json("Villager added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
