const Transaction = require("../models/Transaction");

// GET
const getTransactions = async (req, res) => {
  try {
    const transactions =
      await Transaction.find().sort({
        date: -1,
      });

    res.json(transactions);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// POST
const addTransaction = async (req, res) => {
  try {
    const transaction =
      await Transaction.create(req.body);

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE
const deleteTransaction = async (
  req,
  res
) => {
  try {
    await Transaction.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction,
};