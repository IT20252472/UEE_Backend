const Admin = require("../Models/Admin");

exports.createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    if (savedAdmin) {
      res.status(201).send({ message: "success!", data: savedAdmin });
    } else {
      res.status(400).send({ message: "failed!", data: savedAdmin });
    }
  } catch (e) {
    console.log("Error in Create Admin", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    if (admins) {
      res.status(200).send({ message: "success!", data: admins });
    } else {
      res.status(400).send({ message: "failed!", data: admins });
    }
  } catch (e) {
    console.log("Error in Get All Admins", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.getAdminByID = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
      res.status(200).send({ message: "success!", data: admin });
    } else {
      res.status(400).send({ message: "failed!", data: admin });
    }
  } catch (e) {
    console.log("Error in Get Admin By Id", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (admin) {
      res.status(200).send({ message: "success!", data: admin });
    } else {
      res.status(400).send({ message: "failed!", data: admin });
    }
  } catch (e) {
    console.log("Error in Delete Admin", e);
    res.status(500).send({ message: "server error", data: e });
  }
};

exports.updateAdmin = async (req, res) => {
  const data = req.body;
  try {
    const admin = await Admin.updateOne(
      {
        _id: req.params.id,
      },
      { ...data }
    );
    if (admin) {
      res.status(200).send({ message: "success!", data: admin });
    } else {
      res.status(400).send({ message: "failed!", data: admin });
    }
  } catch (e) {
    console.log("Error in Update admin", e);
    res.status(500).send({ message: "server error", data: e });
  }
};
