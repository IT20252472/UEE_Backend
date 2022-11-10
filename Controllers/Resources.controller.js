const Resources = require("../Models/Resources");

exports.addResources = async (req, res) => {
  try {
    const resources = new Resources(req.body);
    const savedResources = await resources.save();
    if (savedResources) {
      res.status(201).send({ message: "success!", data: savedResources });
    } else {
      res.status(400).send({ message: "failed!", data: savedResources });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getResources = async (req, res) => {
  try {
    const resources = await Resources.findById(req.params.id);
    res.json(resources);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resources.find({});
    res.json(resources);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateResources = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateResources = await Resources.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateResources);
      res.status(200).send({ message: "success", data: updateResources });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteResources = async (req, res) => {
  try {
    const deleteResources = await Resources.findByIdAndDelete(req.params.id);
    res.json(deleteResources);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
