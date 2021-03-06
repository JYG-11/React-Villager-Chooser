const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birthdaySchema = new Schema({
  month: { type: String, required: true },
  day: { type: String, required: true },
});

const villagerSchema = new Schema(
  {
    name: { type: String, required: true },
    personality: { type: String, required: true },
    specie: { type: String, required: true },
    birthday: birthdaySchema,
    catchphrase: { type: String, required: true },
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
