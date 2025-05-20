const express = require("express");
const router = express.Router();
const db = require("../db");

function calculateBill(units) {
  let amount = 0;
  if (units <= 50) amount = units * 3.5;
  else if (units <= 150) amount = 50 * 3.5 + (units - 50) * 4.0;
  else if (units <= 250) amount = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2;
  else amount = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + (units - 250) * 6.5;
  return amount;
}

router.post("/create-bill", async (req, res) => {
  const { name, address, units, month } = req.body;
  try {
    const [consumer] = await db.execute(
      "INSERT INTO Consumer (name, address) VALUES (?, ?)",
      [name, address]
    );
    const consumer_id = consumer.insertId;
    const amount = calculateBill(units);

    await db.execute(
      "INSERT INTO Billing (consumer_id, month, units, amount) VALUES (?, ?, ?, ?)",
      [consumer_id, month, units, amount]
    );
    res.json({ message: "Bill created successfully", amount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
