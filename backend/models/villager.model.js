const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const villagerSchema = new Schema(
  {
    name: { type: String, required: true },
    personality: { type: String, required: true },
    species: { type: String, required: true },
    birthday: { type: Date, required: true },
    catchphrase: { type: String, required: true },
    skill: { type: String, required: false },
    goal: { type: String, required: false },
    fear: { type: String, required: false },
    style1: { type: String, required: false },
    style2: { type: String, required: false },
    color1: { type: String, required: false },
    color2: { type: String, required: false },
    song: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Villager = mongoose.model("Villager", villagerSchema);

module.exports = Villager;
