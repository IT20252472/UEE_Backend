const EndangeredSpecies = require("../Models/EndangeredSpecies");

exports.addSpecies = async (req, res) => {
  try {
    const Species = new EndangeredSpecies(req.body);
    const savedSpecies = await Species.save();
    if (savedSpecies) {
      res.status(201).send({ message: "success!", data: savedSpecies });
    } else {
      res.status(400).send({ message: "failed!", data: savedSpecies });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getSpecies = async (req, res) => {
  try {
    const Species = await EndangeredSpecies.findById(req.params.id);
    res.json(Species);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllSpecies = async (req, res) => {
  try {
    const Species = await EndangeredSpecies.find({});
    res.json(Species);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateSpecies = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateSpecies = await EndangeredSpecies.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateSpecies);
      res.status(200).send({ message: "success", data: updateSpecies });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteSpecies = async (req, res) => {
  try {
    const deleteSpecies = await EndangeredSpecies.findByIdAndDelete(
      req.params.id
    );
    res.json(deleteSpecies);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
