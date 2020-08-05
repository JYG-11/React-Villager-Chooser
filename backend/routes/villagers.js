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
  const styles = req.body.styles;
  const colors = req.body.colors;
  const song = req.body.song;

  const newVillager = new Villager({
    name,
    personality,
    specie,
    birthday,
    catchphrase,
    styles,
    colors,
    song,
  });

  newVillager
    .save()
    .then(() => res.json("Villager added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Villager.findById(req.params.id).then((villager) =>
    res.json(villager).catch((err) => res.status(400).json("Error: " + err))
  );
});

router.route("/remove/:id").delete((req, res) => {
  Villager.findByIdAndDelete(req.params.id)
    .then(() => res.json("Villager deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Villager.findById(req.params.id)
    .then((villager) => {
      villager.name = req.body.name;
      villager.personality = req.body.personality;
      villager.specie = req.body.specie;
      villager.birthday = req.body.birthday;
      villager.catchphrase = req.body.catchphrase;
      villager.styles = req.body.styles;
      villager.colors = req.body.colors;
      villager.song = req.body.song;

      villager
        .save()
        .then(() => res.json("Villager updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
