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
  const species = req.body.species;
  const birthday = Date.parse(req.body.birthday);
  const catchphrase = req.body.catchphrase;
  const skill = req.body.skill;
  const goal = req.body.goal;
  const fear = req.body.fear;
  const style1 = req.body.style1;
  const style2 = req.body.style2;
  const color1 = req.body.color1;
  const color2 = req.body.color2;
  const song = req.body.song;

  const newVillager = new Villager({
    name,
    personality,
    species,
    birthday,
    catchphrase,
    skill,
    goal,
    fear,
    style1,
    style2,
    color1,
    color2,
    song,
  });

  newVillager
    .save()
    .then(() => res.json("Villager added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
