const Package = require('../db/models/package'),
  mongoose = require('mongoose');

exports.getAllPackages = async (req, res) => {
  try {
    const thePackages = await Package.find({ user: req.user._id });
    res.status(200).json(thePackages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createPackage = async (req, res) => {
  try {
    const package = new Package({
      ...req.body,
      user: req.user._id
    });
    await package.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPackages = async (req, res) => {
  try {
    const thePackages = await Package.find({ user: req.user._id });
    res.status(200).json(thePackages);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOnePackage = async (req, res) => {
  try {
    const thePackage = await Package.findOne({ _id: req.params.id });
    res.status(200).json(thePackage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePackage = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const package = await Package.findOne({
      _id: req.params.id
    });
    updates.forEach((update) => (package[update] = req.body[update]));
    await package.save();
    res.status(200).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const packageToDelete = await Package.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    res.status(200).send('Package has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
