const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const villagerSchema = new Schema(
  {
    name: { type: String, required: true },
    personality: { type: String, required: true },
    specie: { type: String, required: true },
    birthday: { type: Date, required: true },
    catchphrase: { type: String, required: true },
    skill: { type: String, required: false },
    goal: { type: String, required: false },
    fear: { type: String, required: false },
    styles: { type: Array, required: false },
    colors: { type: Array, required: false },
    song: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Villager = mongoose.model("Villager", villagerSchema);

module.exports = Villager;
