const Transaction = require("../models/Transaction");

// GET ALL
exports.getTransactions = async (req, res) => {
  const data = await Transaction.find();
  res.json(data);
};

// ADD
exports.addTransaction = async (req, res) => {
  const data = await Transaction.create(req.body);
  res.json(data);
};

// DELETE
exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};